const express = require("express");
const app = express();
const dbConnect = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// import routes
const blog = require("./router/blog");

// mount router
app.use("/api/v1", blog);

// default route
app.get("/", (req, res) => {
  res.send("This is the default route 🚀");
});

// connect to DB
dbConnect();

// start server
app.listen(PORT, () => {
  console.log(`✅ Server running at port ${PORT}`);
});
