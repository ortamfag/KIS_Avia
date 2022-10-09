const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')


//Registration
router.get('/registration', authController.registrationView)
router.post('/registration', authController.registration)


//Registration
router.get('/', authController.loginView)
router.post('/', authController.login)

router.get('/home', authController.home)

router.post('/getUsers', authMiddleware, authController.getUsers)

module.exports = router