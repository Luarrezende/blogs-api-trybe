const express = require('express');

const router = express.Router();

const { categoriesVerification } = require('../middlewares/categoriesValidate');
const tokenVerification = require('../middlewares/tokenValidade');
const { categoriesController } = require('../controllers');

router.post('/', categoriesVerification, tokenVerification, categoriesController.postCategories);

router.get('/', tokenVerification, categoriesController.getAllUsers);

module.exports = router;