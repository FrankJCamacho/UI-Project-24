// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for post
const commentSchema = new mongoose.Schema({
    comment_id: { type: String, required: true, unique: true},
    post_id: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
    user_id: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    content: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})

// 3. create model of schema
const Comment = mongoose.model("Comment", commentSchema);

// 4. create CRUD functions on model
//CREATE a new Comment
async function createComment(commentId, postId, userId, content) {
    try {
        const comment = new Comment({
          comment_id: commentId,
          post_id: postId,
          user_id: userId,
          content: content
        });
        await comment.save();

        return comment;
    } catch (error) {
        throw error;
    }
}

// READ a comment
async function readComment(commentId) {
    try {
      const comment = await Comment.findById(commentId).exec(); //read comment by finding its id

      return comment;
    } catch (error) {
      throw error;
    }
  }
// UPDATE
async function updateComment(commentId, newContent) {
    try {
        const comment = await Comment.findByIdAndUpdate(
          commentId,
          { content: newContent}, //maybe include when it was updated eventually
          { new: true }
        ).exec();
        return comment;
    } catch (error) {
        throw error;
    }
}

//DELETE
async function deleteComment(commentId) {
    try {
        await Comment.findByIdAndDelete(commentId).exec(); //delete comment by finding id
    } catch (error) {
        throw error;
    }
};


// 5. export all functions we want to access in route files
module.exports = { 
  createComment, readComment, updateComment, deleteComment 
};