const express = require("express");
const router = express.Router();

// import controller
const  {likesCreate,unlikePost}  = require("../controllers/likecontroller");
const  commentcontrol  = require("../controllers/commentcontroller");
const {createPost,getPosts}  = require("../controllers/postcontroller");

//router.get("/dummyroute", dummyLike);
router.post("/create/comment", commentcontrol);
router.post("/create/post",createPost);
router.get("/posts",getPosts);
router.post("/create/like", likesCreate);
router.post("/unlike/post", unlikePost);


module.exports = router;
