const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema({
  from: String,
  to: String,
  text: String,
  media: String,
  read: Boolean,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Message', MessageSchema);
