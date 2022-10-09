const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth.config')

module.exports = function (roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") { //если метод равняется этому, то вызывается следующий middleware
            next()
        }

        try {
            const token = req.headers.authorization.split(' ')[1]

            if (!token) {
                console.log(e)
                return res.status(403).json({
                    message: "Пользователь не администратор"
                })
            }

            next()

        } catch (e) {
            console.log(e)
            return res.status(403)
        }
    }
}