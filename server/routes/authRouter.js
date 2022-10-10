const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const roleMiddleware = require('../middleware/roleMiddleware')


//Registration
router.get('/registration', authController.registrationView)
router.post('/registration', authController.registration)


//Registration
router.get('/', authController.loginView)
router.post('/', authController.login)

router.get('/home2', authController.home2)

//Admin page after login
router.get('/homeAdmin', authController.homeAdmin)


//test func
router.post('/getUsers', roleMiddleware(['1']), authController.getUsers)

module.exports = router