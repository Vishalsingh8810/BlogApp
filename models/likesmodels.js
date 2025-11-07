


// import mongoose

const mongoose= require("mongoose");


// router handler

const likeSchema= new mongoose.Schema({

  // konsii post pe comment kr rha hai 
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"  // refrece by post models
    },
    // kon comment kr rha hai
    user:{
        type:String,
        required:true,
    },
})

// export

module.exports= mongoose.model("Likes", likeSchema);