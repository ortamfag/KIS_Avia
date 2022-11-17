const mysql = require('mysql')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth.config')
const saltRounds = 7;

// Connection Pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

//Render the login page
exports.loginView = (req, res) => {
    res.render('login-user')
}

const generateAccessToken = (ID, RoleID) => {
    const payload = {
        ID, 
        RoleID
    }
    console.log(payload)

    return jwt.sign(payload, secret, {expiresIn: "12h"})
}

// Login User
exports.login = (req, res) => {
    const {email, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        connection.query('SELECT * FROM users WHERE Email = ?', [email], (err, candidate) => {
            connection.release();

            const validPassword = bcrypt.compareSync(password, candidate[0].Password)

            if (!err) {
                if (candidate[0].Active === 0) {
                    res.render('login-user', {
                        alertBlocked: "Пользователь заблокирован"
                    })
                } else if ((candidate.length === 1) && (validPassword === true)) {
                    const token = generateAccessToken(candidate[0].ID, candidate[0].RoleID)    
                    res.cookie('token', token)     
                    res.clearCookie('badLogin')

                    //находим дату
                    let thisDate = new Date();
                    let absoluteTimeOfLogin = thisDate.getTime()
                    res.cookie('absoluteTimeOfLogin', absoluteTimeOfLogin)
                    thisDate = thisDate.toLocaleString()
                    thisDate = thisDate.split(',')
                    let dateOfLogin = thisDate[0]
                    let timeOfLogin = thisDate[1].split(' ').join('')
                    

                    res.cookie('loginDate', dateOfLogin) //если это остаётся при некст логине, то вывести попап
                    res.cookie('loginTime', timeOfLogin)
                    res.cookie('isLogOff', 'no')

                    res.cookie('email', email)

                    //находим почту
                    let nameOfNewTable = email.split('@')
                    nameOfNewTable = nameOfNewTable[0]

                    let changeWrongSymbols = nameOfNewTable.split('')      
                    for (let i = 0; i <= changeWrongSymbols.length; i++) {
                        if ((changeWrongSymbols[i] === '.') || (changeWrongSymbols[i] === '-')) {
                            changeWrongSymbols[i] = '_'
                        }
                    }

                    nameOfNewTable = changeWrongSymbols.join('')
                    res.cookie('nameOfNewTable', nameOfNewTable)

                    pool.getConnection((err, connection) => {
                        if (err) throw err; //not connected
                        console.log('Connected as ID' + connection.threadId)
                
                        connection.query(`SHOW TABLES LIKE "${nameOfNewTable}"`, (err, result) => {
                            connection.release();
                
                            if (!err) {
                                if (result.length != 0) {
                                    if (candidate[0].RoleID === 1) {
                                        res.redirect('homeAdmin')
                                    } else {
                                        res.redirect('homeUser')
                                    }
                                } else {
                                    pool.getConnection((err, connection) => {
                                        if (err) throw err; //not connected
                                        console.log('Connected as ID' + connection.threadId)
                                
                                        connection.query(`CREATE TABLE ${nameOfNewTable} (Name VARCHAR(150), Date VARCHAR(150), LogTime VARCHAR(150), LogOutTime VARCHAR(150), TimeSpendOne INT(20), Reason VARCHAR(150), TimeSpend INT(20), Crashes INT(10))`, (err, rows) => {
                                            connection.release();
                                
                                            if (!err) { 
                                                if (candidate[0].RoleID === 1) {
                                                    res.redirect('homeAdmin')
                                                } else {
                                                    res.redirect('homeUser')
                                                }
                                            } else {
                                                console.log(err);
                                            }
                                        })
                                    })
                                }
                                
                            } else {
                                console.log(err);
                            }
                        })
                    })

                } else {
                    let countOfBadLogin
                    if (req.cookies.badLogin != 'undefined') {
                        countOfBadLogin = Number(req.cookies.badLogin) 
                        res.cookie('badLogin', countOfBadLogin + 1)
                    } else {
                        res.cookie('badLogin', 1)
                    }
                    res.render('login-user', { 
                        alert: "Логин или пароль неверны"
                    })
                    console.log(countOfBadLogin)
                }
            } else {
                console.log(err);
            }
        })
    })
}

// Exit User
exports.exit = (req, res) => {
    res.clearCookie('token')
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)
        // console.log(req.cookies.email)
        // console.log(req.cookies.loginDate)
        // console.log(req.cookies.loginTime)
        // console.log(req.cookies.nameOfNewTable)

        //находим дату
        let thisLogOutDate = new Date();
        //время за одну сессию
        let absoluteTimeOfExit = thisLogOutDate.getTime()
        thisLogOutDate = thisLogOutDate.toLocaleString()
        thisLogOutDate = thisLogOutDate.split(',')
        let dateOfLoginOut = thisLogOutDate[0]
        let timeOfLoginOut = thisLogOutDate[1].split(' ').join('')
 
        console.log(absoluteTimeOfExit)
        console.log(req.cookies.absoluteTimeOfLogin)
        let oneSessionTime = Math.ceil(Math.abs(absoluteTimeOfExit - req.cookies.absoluteTimeOfLogin) / (1000 * 60))
        console.log(oneSessionTime)


        connection.query(`INSERT INTO ${req.cookies.nameOfNewTable} SET Name = ?, Date = ?, LogTime = ?, LogOutTime = ?, TimeSpendOne = ?, Reason = ?, TimeSpend = ?, Crashes = ?`, [req.cookies.email, req.cookies.loginDate, req.cookies.loginTime, timeOfLoginOut, oneSessionTime, 'No error', 0, 0], (err, rows) => {
            connection.release();

            if (!err) {
                res.cookie('isLogOff', 'yes')
                res.render('exit-page', {alert: 'Вы успешно вышли из аккаунта'})
            } else {
                console.log(err);
            }
        })
    })
}

//Crush Reason
exports.crushReason = (req, res) => {
    const { crush } = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected

        connection.query(`UPDATE ${req.cookies.nameOfNewTable} SET Reason = ?, Crashes = 1 WHERE LogTime = ?`, [crush, req.cookies.loginTime], (err, rows) => {
            connection.release();

            if (!err) {
                res.clearCookie('nameOfNewTable')
                res.clearCookie('loginTime')
                res.clearCookie('loginDate')
                res.clearCookie('email')
                res.cookie('isLogOff', 'yes')
                res.redirect('/')
            } else {
                console.log(err);
            }
        })
    })

}