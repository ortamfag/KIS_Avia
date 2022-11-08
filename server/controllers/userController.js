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


//Render the home page
exports.homeUser = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)
    
        // User the connection
        connection.query('SELECT * FROM users', (err, rows) => {
            //when done with connection, release it
            connection.release();
    
            if (!err) {
                res.render('homeUser', { rows })
            } else {
                console.log(err);
            }
    
            // console.log('The data from use table: \n', rows)
        })
    })
}
