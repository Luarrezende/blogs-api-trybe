const { User } = require('../models');

const postLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return ({ status: 'INVALID_USER', message: 'Invalid fields' });
  }

  return { status: 'SUCCESSFUL', message: user.dataValues };
};

module.exports = {
  postLogin,
};