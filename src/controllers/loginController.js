const jwt = require('jsonwebtoken');
const { loginService } = require('../services');
const mapStatusHTTP = require('../utils');

const secret = process.env.JWT_SECRET;
const config = {
  algorithm: 'HS256',
};

const token = (result) => jwt.sign(result, secret, config);

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  const { status, message } = await loginService.postLogin(email, password);

  if (status === 'INVALID_USER') {
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
  postLogin,
};