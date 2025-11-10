const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profilePic: String,
  online: Boolean,
  lastSeen: Date,
});
module.exports = mongoose.model('User', UserSchema);
