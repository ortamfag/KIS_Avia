const mysql = require('mysql')

// Connection Pool
const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

exports.loginView = (req, res) => {
    res.render('login-user')
}

// Login User
exports.login = (req, res) => {
    const {email, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        let searchTerm = req.body.search;
        console.log(searchTerm)

        // User the connection
        connection.query('INSERT INTO users SET ID = ?, RoleID = ?, Email = ?, Password = ?, Active = ?', [18, 1, email, password, 1], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('reg-user', { alert: "User added successfully" })
            } else {
                console.log(err);
            }

            console.log('The data from use table: \n', rows)
        })
    })
}

exports.registrationView = (req, res) => {
    res.render('reg-user')
}

// Reg User
exports.registration = (req, res) => {
    const {email, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        let searchTerm = req.body.search;
        console.log(searchTerm)

        // User the connection
        connection.query('INSERT INTO users SET ID = ?, RoleID = ?, Email = ?, Password = ?, Active = ?', [18, 1, email, password, 1], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('reg-user', { alert: "User added successfully" })
            } else {
                console.log(err);
            }

            console.log('The data from use table: \n', rows)
        })
    })
}