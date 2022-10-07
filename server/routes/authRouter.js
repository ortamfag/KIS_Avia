const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')


//Registration
router.get('/registration', authController.registrationView)
router.post('/registration', authController.registration)


//Registration
router.get('/', authController.loginView)
router.post('/', authController.login)

module.exports = router