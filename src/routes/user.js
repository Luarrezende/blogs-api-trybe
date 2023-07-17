const express = require('express');

const router = express.Router();

const { dnVerification, emailValidation,
  passValidation } = require('../middlewares/userValidade');
const tokenVerification = require('../middlewares/tokenValidade');
const { userController } = require('../controllers');

router.post('/', dnVerification, emailValidation, passValidation, userController.postUser);

router.get('/', tokenVerification, userController.getAllUsers);

router.get('/:id', tokenVerification, userController.getById);

module.exports = router;