// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for user
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  email: { type: String, required: true},
  first_name: { type: String},
  last_name: { type: String},
  followers: [String],
  following: [String]
})

// 3. create model of schema
const User = mongoose.model("User", userSchema);

// 4. create CRUD functions on model
//CREATE a user
async function register(username, password, email) {
  const user = await getUser(username);
  if(user) throw Error('Username already in use');

  const newUser = await User.create({
    username: username,
    password: password,
    email: email

  });

  return newUser;
}

// READ a user
async function login(username, password) {
  const user = await getUser(username);
  if(!user) throw Error('User not found');
  if(user.password != password) throw Error('Wrong Password');

  return user;
}

// UPDATE
async function updatePassword(id, password) {
  const user = await User.updateOne({"_id": id}, {$set: { password: password}});
  return user;
}

//DELETE
async function deleteUser(id) {
  await User.deleteOne({"_id": id});
};

// utility functions
async function getUser(username) {
  return await User.findOne({ "username": username});
}

// 5. export all functions we want to access in route files
module.exports = { 
  register, login, updatePassword, deleteUser 
};