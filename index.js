const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const PORT = process.env.PORT || 5000

require('dotenv').config()

const connection = mysql.createConnection({
    host     : 'std-mysql.ist.mospolytech.ru',
    port     : '3306',
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

// Parsing middleware
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Parse application/json
app.use(bodyParser.json())

// Static Files
app.use(express.static('public'));

// Templating Engine
app.engine('hbs', exphbs.engine( {extname: '.hbs'} ))
app.set('view engine', 'hbs')

// Router
app.get('', (req, res) => {
    res.render('home');
})

const start = () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()

