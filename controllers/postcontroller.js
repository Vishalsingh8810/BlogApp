const Post = require("../models/postmodels");

const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;

    const post = new Post({
      title,
      body,
    });
    const savePost = await post.save();

    res.status(200).json({
      success: true,
      data: savePost,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: "server error",
    });
  }
};

const getPosts= async(req,res)=>{
    try{

        const posts= await Post.find().populate("comment").exec();

        return res.status(200).json({
            success:true,
            data:posts
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            data:"server error"
        })
    }
}

module.exports={getPosts:getPosts,createPost:createPost};