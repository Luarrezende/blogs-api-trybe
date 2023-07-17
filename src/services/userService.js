const { User } = require('../models');

const postUser = async (displayName, email, password, image) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return ({ status: 'CONFLICT', message: 'User already registered' });
  }

  const create = await User.create({ displayName, email, password, image });

  return { status: 'CREATED', message: create.dataValues };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESSFUL', message: users };
};

const getById = async (id) => {
  const userId = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

  if (!userId) {
    return { status: 'NOT_FOUND', message: 'User does not exist' };
  }

  return { status: 'SUCCESSFUL', message: userId.dataValues };
};

module.exports = {
  postUser,
  getAllUsers,
  getById,
};