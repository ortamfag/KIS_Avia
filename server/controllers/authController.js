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

//Render the login page
exports.loginView = (req, res) => {
    res.render('login-user')
}

//Render the home page
exports.home = (req, res) => {
    res.render('home')
}

//Render the registration page
exports.registrationView = (req, res) => {
    res.render('reg-user')
}

// Login User
exports.login = (req, res) => {
    const {email, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        connection.query('SELECT * FROM users WHERE Email = ?', [email], (err, candidate) => {
            connection.release();

            if (!err) {
                if ((candidate.length === 1) && (candidate[0].Password === password)) {
                    res.redirect('home')
                } else {
                    res.render('login-user', { alert: "Логин или пароль неверны"})
                }
            } else {
                console.log(err);
            }
        })
    })
}


// Reg User
exports.registration = (req, res) => {
    const {first_name, last_name, email, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        connection.query('INSERT INTO users SET RoleID = ?, FirstName = ?, LastName = ?, Email = ?, Password = ?, Active = ?', [2, first_name, last_name, email, password, 1], (err, rows) => {
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