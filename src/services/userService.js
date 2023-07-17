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

module.exports = {
  postUser,
  getAllUsers,
  // getById,
};