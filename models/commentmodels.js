

// import mongoose

const mongoose= require("mongoose");


// router handler

const commentSchema= new mongoose.Schema({

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
    // kya comment kr rha hai
    body:{
        type:String,
        required:true
    }
})

// export

module.exports= mongoose.model("Comment", commentSchema);