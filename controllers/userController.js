const User = require('../models/User');
exports.updateProfile = async (req, res) => {
  const { username, profilePic } = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, { username, profilePic }, { new: true });
  res.json(user);
};
