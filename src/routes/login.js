const express = require('express');

const router = express.Router();

const { loginVerification } = require('../middlewares/loginValidade');
const { loginController } = require('../controllers');

router.post('/', loginVerification, loginController.postLogin);

module.exports = router;