const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const mapStatusHTTP = require('../utils');

const secret = process.env.JWT_SECRET;
const config = {
  algorithm: 'HS256',
  expiresIn: '1d',
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

const getAllUsers = async (req, res) => {
  const { status, message } = await userService.getAllUsers();

  return res.status(mapStatusHTTP(status)).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await userService.getById(id);

  if (status === 'NOT_FOUND') {
    return res.status(mapStatusHTTP(status)).json({ message });
  }

  return res.status(mapStatusHTTP(status)).json(message);
};

module.exports = {
  postUser,
  getAllUsers,
  getById,
};