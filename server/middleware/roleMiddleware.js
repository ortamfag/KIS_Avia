const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth.config')

module.exports = function (RoleID) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") { //если метод равняется этому, то вызывается следующий middleware
            next()
        }

        try {
            let storageToken = req.cookies
            const token = storageToken.token

            if (!token) {
                return res.status(403).json({
                    message: "Пользователь не авторизован"
                })
            }
            
            const {RoleID: userRoles} = jwt.verify(token, secret)
            let hasRole = false

            if (RoleID[0] == userRoles) {
                hasRole = true
            }
            
            if (hasRole === false) {
                return res.status(403).json({message: "Вы не администратор"})
            }

            next()

        } catch (e) {
            return res.status(403).json({message: "Пользователь не авторизован"})
        }
    }
}