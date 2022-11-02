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


//Render the home page
exports.homeAdmin = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('SELECT * FROM users', (err, rows) => {
            //when done with connection, release it
            connection.release();

            rows.forEach(item => {
                let dateOfEmployeeBirth = new Date(item.Birthdate)
                let nowDate = new Date();
                
                let userAge = Math.ceil(Math.abs(nowDate.getTime() - dateOfEmployeeBirth.getTime()) / (1000 * 60 * 60 * 24 * 365))
                
                item.Birthdate = userAge
            });

            rows.forEach(item => {
                if (item.RoleID === 1) {
                    item.RoleID = 'administrator'
                } else {
                    item.RoleID = 'office user'
                }
            })

            rows.forEach(item => {
                switch(true) {
                    case item.OfficeID === 1:
                        item.OfficeID = 'Abu dhabi'
                        break

                    case item.OfficeID === 3:
                        item.OfficeID = 'Cairo'
                        break

                    case item.OfficeID === 4:
                        item.OfficeID = 'Bahrain'
                        break

                    case item.OfficeID === 5:
                        item.OfficeID = 'Doha'
                        break

                    case item.OfficeID === 6:
                        item.OfficeID = 'Riyadh'
                        break
                }
            })

            if (!err) {
                res.render('homeAdmin', { rows })
            } else {
                console.log(err);
            }

            // console.log('The data from use table: \n', rows)
        })
    })
}

//Render the login page
exports.addUserView = (req, res) => {
    res.render('add-user')
}

// Reg User
exports.addUser = (req, res) => {
    const {first_name, last_name, email, office, birthdate, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        connection.query('SELECT * FROM users WHERE Email = ?', [email], (err, candidate) => {
            connection.release();

            if (!err) {
                if (candidate.length >= 1) {
                    res.render('add-user', { 
                        alertBad: "Пользователь с таким E-mail уже существует" 
                    })
                } else {
                    switch(0) {
                        case first_name.length:
                            res.render('add-user', {
                                alertFirstName: "Имя не может быть пустым"
                            })
                            break

                        case last_name.length:
                            res.render('add-user', { 
                                alertLastName: "Фамилия не может быть пустой" 
                            })
                            break

                        case email.length:
                            res.render('add-user', { 
                                alertEmail: "Электронная почта не может быть пустой" 
                            })
                            break

                        case password.length:
                            res.render('add-user', { 
                                alertPassword: "Пароль не может быть пустой" 
                            })
                            break

                        default:
                            pool.getConnection((err, connection) => {
                                if (err) throw err; //not connected
                                console.log('Connected as ID' + connection.threadId)
        
                                const salt = bcrypt.genSaltSync(saltRounds);
                                const hashPassword = bcrypt.hashSync(password, salt);
                        
                                connection.query('INSERT INTO users SET RoleID = ?, FirstName = ?, LastName = ?, Email = ?, Password = ?, OfficeID = ?, Birthdate = ?, Active = ?', [2, first_name, last_name, email, hashPassword, office, birthdate, 1], (err, rows) => {
                                    connection.release();
                        
                                    if (!err) {
                                        res.render('add-user', { alertSuccess: "Пользователь зарегистрирован" })
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

// Edit Role
exports.changeRole = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('SELECT * FROM users WHERE ID = ?', [req.params.id], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('changeRole', { rows })
            } else {
                console.log(err);
            }
        })
    })
}

// Update Role
exports.updateRole = (req, res) => {
    const {first_name, role_ID} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('UPDATE users SET RoleID = ? WHERE ID = ?', [role_ID, req.params.id], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                pool.getConnection((err, connection) => {
                    if (err) throw err; //not connected
                    console.log('Connected as ID' + connection.threadId)
            
                    // User the connection
                    connection.query('SELECT * FROM users WHERE ID = ?', [req.params.id], (err, rows) => {
                        //when done with connection, release it
                        connection.release();
            
                        if (!err) {
                            res.render('changeRole', { rows, alert: `${first_name} has been updated` })
                        } else {
                            console.log(err);
                        }
                    })
                })
            } else {
                console.log(err);
            }
        })
    })
}


//Block user
// Edit Role
exports.changeBlock = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('SELECT * FROM users WHERE ID = ?', [req.params.id], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('blockUser', { rows })
            } else {
                console.log(err);
            }
        })
    })
}

// Update Role
exports.updateBlock = (req, res) => {
    const {first_name, Active} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('UPDATE users SET Active = ? WHERE ID = ?', [Active, req.params.id], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                pool.getConnection((err, connection) => {
                    if (err) throw err; //not connected
                    console.log('Connected as ID' + connection.threadId)
            
                    // User the connection
                    connection.query('SELECT * FROM users WHERE ID = ?', [req.params.id], (err, rows) => {
                        //when done with connection, release it
                        connection.release();
            
                        if (!err) {
                            res.render('blockUser', { rows, alert: `${first_name} has been updated` })
                        } else {
                            console.log(err);
                        }
                    })
                })
            } else {
                console.log(err);
            }
        })
    })
}