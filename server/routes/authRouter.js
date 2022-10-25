const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')
const roleMiddleware = require('../middleware/roleMiddleware')


//Registration
router.get('/registration', authController.registrationView)
router.post('/registration', authController.registration)


//Login
router.get('/', authController.loginView)
router.post('/', authController.login)

//Admin page after login
router.get('/homeAdmin', roleMiddleware(['1']), adminController.homeAdmin)

//User page after login
router.get('/homeUser', userController.homeUser)

//Add user
router.get('/addUserView', roleMiddleware(['1']), adminController.addUserView)
router.post('/addUser', roleMiddleware(['1']), adminController.addUser)









//test func
router.post('/getUsers', roleMiddleware(['1']), authController.getUsers)

module.exports = router