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
        connection.query(`SELECT * FROM ${req.cookies.nameOfNewTable} WHERE Crashes = 1`, [req.cookies.email],  (err, info) => {
            //when done with connection, release it
            connection.release();
    
            if (!err) {
                pool.getConnection((err, connection) => {
                    if (err) throw err; //not connected
                    console.log('Connected as ID' + connection.threadId)
                
                    // User the connection
                    connection.query('SELECT * FROM users WHERE Email = ?', [req.cookies.email],  (err, rows) => {
                        //when done with connection, release it
                        connection.release();

                        rows[0].crushes = info.length
                        
                        
                
                        if (!err) {
                            pool.getConnection((err, connection) => {
                                if (err) throw err; //not connected
                                console.log('Connected as ID' + connection.threadId)
                            
                                // User the connection
                                connection.query(`SELECT * FROM ${req.cookies.nameOfNewTable}`,  (err, log) => {
                                    //when done with connection, release it
                                    connection.release();
                                    
                                    let allOfTime = 0
                                    for (let i = 0; i < log.length; i++) {
                                        allOfTime += log[i].TimeSpendOne
                                    }
                            
                                    if (!err) {
                                        res.cookie('TimeSpend', allOfTime)
                                        res.render('homeUser', { rows, log})
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
            } else {
                console.log(err);
            }
        })
    })
}

exports.manageFlight = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)
    
        // User the connection
        connection.query(`SELECT * FROM schedules`,  (err, data) => {
            //when done with connection, release it
            connection.release();

            const formatDate = (date) => {
                let day = date.getDate();
                if (day < 10) {
                    day = Number('0' + day);
                }
                let month = date.getMonth() + 1;
                if (month < 10) {
                    month = Number('0' + month);
                }
                const year = date.getFullYear();
                return `${day} / ${month} / ${year}`;
            };

            const formatTime = (time) => {
                let oldTime = time.split('')
                let newTime = []
                for (let i = 0; i < oldTime.length - 3; i++) {
                    newTime.push(oldTime[i])
                }
                newTime = newTime.join('')
                return newTime;
            };

            data.forEach((item) => {
                item.Date = formatDate(item.Date)
                item.Time = formatTime(item.Time)

                switch(item.RouteID) {
                    case 1:
                        item.From = 'AUH'
                        item.Arrival = 'BAH'
                        break
                    
                    case 2:
                        item.From = 'BAH'
                        item.Arrival = 'AUH'
                        break

                    case 3:
                        item.From = 'AUH'
                        item.Arrival = 'ADE'
                        break

                    case 5:
                        item.From = 'ADE'
                        item.Arrival = 'AUH'
                        break

                    case 6:
                        item.From = 'AUH'
                        item.Arrival = 'RUH'
                        break

                    case 7:
                        item.From = 'RUH'
                        item.Arrival = 'AUH'
                        break

                    case 8:
                        item.From = 'AUH'
                        item.Arrival = 'DOH'
                        break

                    case 9:
                        item.From = 'DOH'
                        item.Arrival = 'AUH'
                        break

                    case 10:
                        item.From = 'DOH'
                        item.Arrival = 'CAI'
                        break

                    case 11:
                        item.From = 'CAI'
                        item.Arrival = 'DOH'
                        break

                    case 12:
                        item.From = 'AUH'
                        item.Arrival = 'CAI'
                        break

                    case 13:
                        item.From = 'CAI'
                        item.Arrival = 'AUH'
                        break

                    case 14:
                        item.From = 'AUH'
                        item.Arrival = 'CAI'
                        break

                    case 15:
                        item.From = 'CAI'
                        item.Arrival = 'AUH'
                        break
                }

                switch(item.AircraftID) {
                    case 1: 
                        item.AircraftID = 738
                        break
                    
                    case 2:
                        item,AircraftID = 739
                        break
                }

                switch(item.Confirmed) {
                    case 0:
                        item.Confirmed = 'No'
                        break

                    case 1:
                        item.Confirmed = 'Yes'
                        break
                }

                item.BusinessPrice = Math.floor(item.EconomyPrice * 1.35)
                item.FirstClassPrice = Math.floor(item.BusinessPrice * 1.3)
            })
    
            if (!err) {
                res.render('manage-flight', { data })
            } else {
                console.log(err);
            }
        })
    })
}

// Cancel Flight
exports.cancelFlight = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('SELECT * FROM schedules WHERE ID = ?', [req.params.id], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                res.render('cancelFlight', { rows })
            } else {
                console.log(err);
            }
        })
    })
}

// Cancel flight
exports.updateCancelFlight = (req, res) => {
    const {flightNumber, confirmed} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('UPDATE schedules SET Confirmed = ? WHERE ID = ?', [confirmed, req.params.id], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                pool.getConnection((err, connection) => {
                    if (err) throw err; //not connected
                    console.log('Connected as ID' + connection.threadId)
            
                    // User the connection
                    connection.query('SELECT * FROM schedules WHERE ID = ?', [req.params.id], (err, rows) => {
                        //when done with connection, release it
                        connection.release();
            
                        if (!err) {
                            res.render('cancelFlight', { rows, alert: `${flightNumber} has been updated` })
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


// Edit Flight
exports.editFlight = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('SELECT * FROM schedules WHERE ID = ?', [req.params.id], (err, data) => {
            //when done with connection, release it
            connection.release();

            const formatDate = (date) => {
                let day = date.getDate();
                if (day < 10) {
                    day = Number('0' + day);
                }
                let month = date.getMonth() + 1;
                if (month < 10) {
                    month = Number('0' + month);
                }
                const year = date.getFullYear();
                return `${month} / ${day} / ${year}`;
            };

            const formatTime = (time) => {
                let oldTime = time.split('')
                let newTime = []
                for (let i = 0; i < oldTime.length - 3; i++) {
                    newTime.push(oldTime[i])
                }
                newTime = newTime.join('')
                return newTime;
            };

            data.forEach((item) => {
                item.Date = formatDate(item.Date)
                item.Time = formatTime(item.Time)

                switch(item.RouteID) {
                    case 1:
                        item.From = 'AUH'
                        item.Arrival = 'BAH'
                        break
                    
                    case 2:
                        item.From = 'BAH'
                        item.Arrival = 'AUH'
                        break

                    case 3:
                        item.From = 'AUH'
                        item.Arrival = 'ADE'
                        break

                    case 5:
                        item.From = 'ADE'
                        item.Arrival = 'AUH'
                        break

                    case 6:
                        item.From = 'AUH'
                        item.Arrival = 'RUH'
                        break

                    case 7:
                        item.From = 'RUH'
                        item.Arrival = 'AUH'
                        break

                    case 8:
                        item.From = 'AUH'
                        item.Arrival = 'DOH'
                        break

                    case 9:
                        item.From = 'DOH'
                        item.Arrival = 'AUH'
                        break

                    case 10:
                        item.From = 'DOH'
                        item.Arrival = 'CAI'
                        break

                    case 11:
                        item.From = 'CAI'
                        item.Arrival = 'DOH'
                        break

                    case 12:
                        item.From = 'AUH'
                        item.Arrival = 'CAI'
                        break

                    case 13:
                        item.From = 'CAI'
                        item.Arrival = 'AUH'
                        break

                    case 14:
                        item.From = 'AUH'
                        item.Arrival = 'CAI'
                        break

                    case 15:
                        item.From = 'CAI'
                        item.Arrival = 'AUH'
                        break
                }

                switch(item.AircraftID) {
                    case 1: 
                        item.AircraftID = 'Boeing 738'
                        break
                    
                    case 2:
                        item,AircraftID = 'Boeing 739'
                        break
                }
            })

            if (!err) {
                res.render('editFlight', { data })
            } else {
                console.log(err);
            }
        })
    })
}

// Edit flight
exports.updateEditFlight = (req, res) => {
    const {flightNumber, date, time, price} = req.body

    let formatDate = new Date(date)

    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log('Connected as ID' + connection.threadId)

        // User the connection
        connection.query('UPDATE schedules SET Date = ?, Time = ?, EconomyPrice = ? WHERE ID = ?', [formatDate, time, price, req.params.id], (err, rows) => {
            //when done with connection, release it
            connection.release();

            if (!err) {
                pool.getConnection((err, connection) => {
                    if (err) throw err; //not connected
                    console.log('Connected as ID' + connection.threadId)
            
                    // User the connection
                    connection.query('SELECT * FROM schedules WHERE ID = ?', [req.params.id], (err, data) => {
                        //when done with connection, release it
                        connection.release();

                        const formatDate = (date) => {
                            let day = date.getDate();
                            if (day < 10) {
                                day = Number('0' + day);
                            }
                            let month = date.getMonth() + 1;
                            if (month < 10) {
                                month = Number('0' + month);
                            }
                            const year = date.getFullYear();
                            return `${month} / ${day} / ${year}`;
                        };
            
                        const formatTime = (time) => {
                            let oldTime = time.split('')
                            let newTime = []
                            for (let i = 0; i < oldTime.length - 3; i++) {
                                newTime.push(oldTime[i])
                            }
                            newTime = newTime.join('')
                            return newTime;
                        };

                        data.forEach((item) => {
                            item.Date = formatDate(item.Date)
                            item.Time = formatTime(item.Time)
            
                            switch(item.RouteID) {
                                case 1:
                                    item.From = 'AUH'
                                    item.Arrival = 'BAH'
                                    break
                                
                                case 2:
                                    item.From = 'BAH'
                                    item.Arrival = 'AUH'
                                    break
            
                                case 3:
                                    item.From = 'AUH'
                                    item.Arrival = 'ADE'
                                    break
            
                                case 5:
                                    item.From = 'ADE'
                                    item.Arrival = 'AUH'
                                    break
            
                                case 6:
                                    item.From = 'AUH'
                                    item.Arrival = 'RUH'
                                    break
            
                                case 7:
                                    item.From = 'RUH'
                                    item.Arrival = 'AUH'
                                    break
            
                                case 8:
                                    item.From = 'AUH'
                                    item.Arrival = 'DOH'
                                    break
            
                                case 9:
                                    item.From = 'DOH'
                                    item.Arrival = 'AUH'
                                    break
            
                                case 10:
                                    item.From = 'DOH'
                                    item.Arrival = 'CAI'
                                    break
            
                                case 11:
                                    item.From = 'CAI'
                                    item.Arrival = 'DOH'
                                    break
            
                                case 12:
                                    item.From = 'AUH'
                                    item.Arrival = 'CAI'
                                    break
            
                                case 13:
                                    item.From = 'CAI'
                                    item.Arrival = 'AUH'
                                    break
            
                                case 14:
                                    item.From = 'AUH'
                                    item.Arrival = 'CAI'
                                    break
            
                                case 15:
                                    item.From = 'CAI'
                                    item.Arrival = 'AUH'
                                    break
                            }
            
                            switch(item.AircraftID) {
                                case 1: 
                                    item.AircraftID = 'Boeing 738'
                                    break
                                
                                case 2:
                                    item,AircraftID = 'Boeing 739'
                                    break
                            }
                        })
            
                        if (!err) {
                            res.render('editFlight', { data, alert: `${flightNumber} has been updated` })
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

//Search for flight
exports.searchForFlight = (req, res) => {
    res.render('searchForFlight')
}

//Search for flight
exports.flightSatisfaction = (req, res) => {
    res.render('flightSatisfaction')
}