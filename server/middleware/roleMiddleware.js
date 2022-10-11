const jwt = require('jsonwebtoken')
const { secret } = require('../config/auth.config')

module.exports = function (RoleID) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") { //если метод равняется этому, то вызывается следующий middleware
            next()
        }

        try {
            const storageToken = localStorage.getItem('bearer')
            const token = storageToken.split(' ')[1]

            if (!token) {
                console.log(e)
                return res.status(403).json({
                    message: "Пользователь не авторизован"
                })
            }
            
            const {RoleID: userRoles} = jwt.verify(token, secret)
            let hasRole = false

            if (RoleID.includes(userRoles)) {
                hasRole = true
            }
            
            if (!hasRole) {
                return res.status(403).json({message: "Вы не администратор"})
            }

            next()

        } catch (e) {
            console.log(e)
            return res.status(403)
        }
    }
}