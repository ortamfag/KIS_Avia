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

//Render the registration page
exports.registrationView = (req, res) => {
    res.render('reg-user')
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
                if ((candidate.length === 1) && (validPassword === true)) {
                    const token = generateAccessToken(candidate[0].ID, candidate[0].RoleID)    
                    res.cookie('token', token)     

                    if (candidate[0].RoleID === 1) {
                        res.redirect('homeAdmin')
                    } else {
                        res.redirect('homeUser')
                    }

                } else {
                    res.render('login-user', { 
                        alert: "Логин или пароль неверны"
                    })
                }
            } else {
                console.log(err);
            }
        })
    })
}


// Reg User
exports.registration = (req, res) => {
    const {first_name, last_name, email, office, birthdate, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        connection.query('SELECT * FROM users WHERE Email = ?', [email], (err, candidate) => {
            connection.release();

            if (!err) {
                if (candidate.length >= 1) {
                    res.render('reg-user', { 
                        alertBad: "Пользователь с таким E-mail уже существует" 
                    })
                } else {
                    switch(0) {
                        case first_name.length:
                            res.render('reg-user', {
                                alertFirstName: "Имя не может быть пустым"
                            })
                            break

                        case last_name.length:
                            res.render('reg-user', { 
                                alertLastName: "Фамилия не может быть пустой" 
                            })
                            break

                        case email.length:
                            res.render('reg-user', { 
                                alertEmail: "Электронная почта не может быть пустой" 
                            })
                            break

                        case password.length:
                            res.render('reg-user', { 
                                alertPassword: "Пароль не может быть пустой" 
                            })
                            break

                        default:
                            pool.getConnection((err, connection) => {
                                if (err) throw err; //not connected
                                console.log('Connected as ID' + connection.threadId)
        
                                const salt = bcrypt.genSaltSync(saltRounds);
                                const hashPassword = bcrypt.hashSync(password, salt);
                        
                                connection.query('INSERT INTO users SET RoleID = ?, FirstName = ?, LastName = ?, Email = ?, Password = ?, OfficeID = ?, Birthdate = ?, Active = ?', [1, first_name, last_name, email, hashPassword, office, birthdate, 1], (err, rows) => {
                                    connection.release();
                        
                                    if (!err) {
                                        res.render('reg-user', { alert: "Пользователь зарегистрирован" })
                                    } else {
                                        console.log(err);
                                    }
                                })
                            })
                            break
                    }
                }

            } else {
                console.log(err);
            }
        })
    })
}

//getUsers

// Login User
exports.getUsers = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        connection.query('SELECT * FROM users', (err, rows) => {
            connection.release();

            if (!err) {
                res.redirect('home')
                console.log(rows)
            } else {
                console.log(err);
            }
        })
    })
}