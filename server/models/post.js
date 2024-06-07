// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for post
const postSchema = new mongoose.Schema({
  user: { type: String, required: true}, //user id
  post_title: { type: String, required: true},
  post_description: { type: String, required: true},
  post_likes: { type: Number}
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);

// 4. create CRUD functions on model
//CREATE a new Post
async function newPost(user, post_title, post_description) {
  const post = await getPost(post_title);
  if(post) throw Error("Title already in use!! Please pick a different one.")

  const newPost = await Post.create({
    user: user,
    post_title: post_title,
    post_description: post_description
  });

  return newPost;
}

// READ a user
async function findPost(post_title) {
  const post = await getUser(post_title);
  if(!post[0]) throw Error("Post not found!! Please try another title.");

  return post;
}

// UPDATE
async function updatePostTitle(post_title) {
  const post = await getPost( {$set: { post_title: post_title}});

  return post;
}

//DELETE
async function deletePost(post_title) {
  const post = await getUser(post_title);
  await Post.deleteOne(post);

};

// utility functions
async function getPost(post_title) {
  return await Post.findOne({ "post_title": post_title});
}

// 5. export all functions we want to access in route files
module.exports = { 
  newPost, findPost, updatePostTitle, deletePost 
};