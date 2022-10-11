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
