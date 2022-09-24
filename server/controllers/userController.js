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

// View Users
exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('SELECT * FROM users WHERE Active = "1"', (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('home', { rows })
            } else {
                console.log(err);
            }

            console.log('The data from use table: \n', rows)
        })
    })
}

//Search
exports.find = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        let searchTerm = req.body.search;
        console.log(searchTerm)

        // User the connection
        connection.query('SELECT * FROM users WHERE FirstName LIKE ? OR LastName LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('home', { rows })
            } else {
                console.log(err);
            }

            console.log('The data from use table: \n', rows)
        })
    })
}

//Render the addUser form
exports.form = (req, res) => {
    res.render('add-user')
}

// Add User
exports.create = (req, res) => {
    const {first_name, last_name, email, password} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        let searchTerm = req.body.search;
        console.log(searchTerm)

        // User the connection
        connection.query('INSERT INTO users SET ID = ?, RoleID = ?, FirstName = ?, LastName = ?, Email = ?, Password = ?, Active = ?', [17, 1, first_name, last_name, email, password, 1], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('add-user')
            } else {
                console.log(err);
            }

            console.log('The data from use table: \n', rows)
        })
    })
}