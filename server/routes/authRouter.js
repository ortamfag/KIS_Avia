const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')
const roleMiddleware = require('../middleware/roleMiddleware')

//Login
router.get('/', authController.loginView)
router.post('/', authController.login)

//Admin page after login
router.get('/homeAdmin', roleMiddleware(['1']), adminController.homeAdmin)

//User page after login
router.get('/homeUser', userController.homeUser)

//ADMIN

//Add user
router.get('/addUserView', roleMiddleware(['1']), adminController.addUserView)
router.post('/addUser', roleMiddleware(['1']), adminController.addUser)

//Change Role
router.get('/changeRole/:id', roleMiddleware(['1']), adminController.changeRole)
router.post('/changeRole/:id', roleMiddleware(['1']), adminController.updateRole)

//Block user
//Change Role
router.get('/blockUser/:id', roleMiddleware(['1']), adminController.changeBlock)
router.post('/blockUser/:id', roleMiddleware(['1']), adminController.updateBlock)

//Exit
router.post('/exit', authController.exit)

//Crush report
router.post('/crushReason', authController.crushReason)

module.exports = router