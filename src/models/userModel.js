// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

// Explicitly specify the collection name as 'users' to match the MongoDB collection name
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
