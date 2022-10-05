const express = require('express')
const mysql = require('mysql')
const PORT = process.env.PORT || 5000

const authRouter = require('./authRouter')
const app = express()

require('dotenv').config()

app.use(express.json())
app.use('/auth', authRouter)

// Connection Pool
const pool = mysql.createPool({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    port            : process.env.DB_PORT,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME
})

// Connect to DB

pool.getConnection((err, connection) => {
    if(err) throw err; //not connected
    console.log('Connected as ID' + connection.threadId)
})


const start = () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()

