// 1. import any needed libraries
const express = require("express");
const Comment = require('../models/comment'); //accesses functions in comment model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/createcomments', async (req, res) => {  //CREATE
    try {
        const { comment_id, post_id, user_id, content } = req.body
        const comment = await Comment.createComment(comment_id, post_id, user_id, content)
        res.send({...comment})
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
  })

  .post('/readcomments', async (req, res) => { //READ
    try {
        const comment = await Comment.readComment(req.params.id); //comment id
        if (comment) {
            res.status(200).send(comment)
        } else {
            res.status(404).send({ message: 'Comment not found!' });
        }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
  })

  .put('/updatecomment', async (req, res) => { //UPDATE
    try {
        const { content } = req.body;
        const comment = await Comment.updateComment(req.params.id, content);
        if (comment) {
          res.status(200).send(comment)
        } else {
          res.status(404).send({ message: 'Comment not found!' });
        }
      } catch (err) {
        res.status(500).send({ error: err.message })
      }
  })

  .delete('/deletecomment', async (req, res) => { //DESTROY
    try {
        await Comment.deleteComment(req.params.id)
        res.send({success: "Comment Deleted."})
      } catch(err) {
        res.status(401).send({message: err.message})
      }
  })

// 3. export router for use in index.js
module.exports = router;
