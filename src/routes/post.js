const express = require('express');

const router = express.Router();

const { postController } = require('../controllers');
const tokenVerification = require('../middlewares/tokenValidade');

router.get('/', tokenVerification, postController.getAllPosts);

module.exports = router;