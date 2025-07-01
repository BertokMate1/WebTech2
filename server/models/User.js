const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }  // ide hash-elt jelszó kerül
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
