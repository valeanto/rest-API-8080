const express = require("express");
const app = express();
// import the module
const Post = require("./api/models/posts");
const postsData = new Post();
const posts = [
  {
    id: "1581461442206",
    title: "This is a New Blog Post",
    content: "This is the content! ",
    post_image: "uploads/post-image-1581461442199.jpg",
    added_date: "1581461442206"
  }
];
app.get("/api/posts", (req, res) => {
  res.status(200).send(posts);
});

app.listen(8080, () => console.log("listening on http://localhost:8080/"));
