

const likes= require("../models/likesmodels");
const Post = require("../models/postmodels");

const likesCreate= async (req,res)=>{

    try{

         const {post, user}= req.body;

         
    // Validate input
    if (!post || !user) {
      return res.status(400).json({
        success: false,
        message: "Post ID and user are required",
      });
    }

    // Check if the post exists
    const existingPost = await Post.findById(post);
    if (!existingPost) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }


         const like= new likes({
            post,user
         })

         const saveLikes= await like.save();

         const updatePost = await post.findByIdAndUpdate(
          post,
          { $push: { likes: saveLikes._id } },
          { new: true })
         
// .populate("likes")
// .exec();

             res.status(200).json({
                success:true,
                data:updatePost,
                message:"Like saved successfully"
                })
    }
    catch(error){
        res.status(500).json({
            success:false,
            data:"Server error",
            message:error.message
        });
    }
}

const unlikePost= async(req,res)=>{
    try{

        const{post,like}= req.body;
        // find post and user and delete like
        const deleteLike= await like.findOneAndDelete({post:post,user:user});
        // update post model and pull like from likes array
        const updateLikePost= await post.findByIdAndUpdate(post,{$pull:{like:deleteLike._id}},{new:true});
        return res.status(200).json({
             success:true,
            data:updateLikePost
        
        })      
    }
    catch(error){
        res.status(500).
    json({
        success:false,
        data:"false while unliking post",
    })
}
}

module.exports= {likesCreate:likesCreate,unlikePost:unlikePost};