const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const mapStatusHTTP = require('../utils');

const secret = process.env.JWT_SECRET;
const config = {
  algorithm: 'HS256',
};

const token = (result) => jwt.sign(result, secret, config);

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, message } = await userService.postUser(displayName, email, password, image);

  if (status === 'CONFLICT') {
    return res.status(mapStatusHTTP(status)).json({ message });
  }

  const payload = {
    email: message.email,
    id: message.id,
  };

  const tokenUser = token(payload);

  return res.status(mapStatusHTTP(status)).json({ token: tokenUser });
};

module.exports = {
  postUser,
  // getAllUsers,
  // getById,
};