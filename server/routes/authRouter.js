const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')


router.get('/', authController.regView)
router.post('/', authController.registration)

module.exports = router