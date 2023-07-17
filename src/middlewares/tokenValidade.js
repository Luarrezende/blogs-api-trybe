const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenVerification = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const tokenVerify = authorization.split(' ')[1];

    const result = jwt.verify(tokenVerify, secret);

    req.user = result;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenVerification;