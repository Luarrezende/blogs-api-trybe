const { Category } = require('../models');

const postCategories = async (name) => {
  const create = await Category.create({ name });

  return { status: 'CREATED', message: create.dataValues };
};

const getAllUsers = async () => {
  const users = await Category.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESSFUL', message: users };
};

module.exports = {
  postCategories,
  getAllUsers,
};