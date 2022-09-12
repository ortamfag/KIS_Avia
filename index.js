const express = require('express')
const mysql = require('mysql')
const PORT = process.env.PORT || 5000

const connection = mysql.createConnection({
    host     : 'phpmyadmin.fit.mospolytech.ru',
    user     : 'std_1408_kis',
    password : '12345678',
    database : 'std_1408_kis'
});

connection.connect(err => {
    if (err) {
        console.log(err)
        return err
    }
    else {
        console.log('Database ------- OK')
    }
})


const app = express()

const start = () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

