const { post } = require("../models/postmodels");
const { comment } = require("../models/commentmodels");

module.exports = async (req, res) => {
  try {
    // fetch data from request body
    const { post: postId, user, body } = req.body;

    // create new comment object
    const newComment = new comment({
      post: postId,
      user,
      body
    });

    // save comment into database
    const saveComment = await newComment.save();

    // find post by id and update comment array
    const updatePost = await post.findByIdAndUpdate(
      postId,
      { $push: { comments: saveComment._id } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatePost,
      message: "Comment saved successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Server error",
      message: error.message
    });
  }
};
