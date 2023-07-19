const { postService } = require('../services');
const mapStatusHTTP = require('../utils');

const getAllPosts = async (req, res) => {
  const { status, message } = await postService.getAllPosts();

  return res.status(mapStatusHTTP(status)).json(message);
};

module.exports = {
  getAllPosts,
};