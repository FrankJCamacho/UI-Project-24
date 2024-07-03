// 1. import any needed libraries
const express = require("express");
const Post = require('../models/post'); //accesses functions in post model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/findPost', async (req, res) => {
    try {
        const post = await Post.findPost(req.body)
        res.send({...post})
      } catch(err) {
        res.status(401).send({message: err.message})
      }
  })

  .post('/newPost', async (req, res) => {
    try {
        const post = await Post.newPost(req.body)
        res.send({...post})
    } catch(err) {
        res.status(401).send({message: err.message})
    }
  })

  .put('/update', async (req, res) => {
    try {
        const post = await Post.updatePostTitle(req.body)
        res.send({...post})
      } catch(err) {
        res.status(401).send({message: err.message})
      }
  })

  .delete('/delete', async (req, res) => {
    try {
        await Post.deletePost(req.body)
        res.send({success: "Post Deleted."})
      } catch(err) {
        res.status(401).send({message: err.message})
      }
  })

// 3. export router for use in index.js
module.exports = router;
