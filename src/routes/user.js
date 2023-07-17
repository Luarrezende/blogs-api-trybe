const express = require('express');

const router = express.Router();

const { dnVerification, emailValidation, passValidation } = require('../middlewares/userValidade');
const { userController } = require('../controllers');

router.post('/', dnVerification, emailValidation, passValidation, userController.postUser);

module.exports = router;