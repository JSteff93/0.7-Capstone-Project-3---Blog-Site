import express from "express";
import bodyParser from "body-parser";
import jquery from "jquery";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let blogs = [];
let counter = 0;

app.get("/", (req, res) => {
    res.render("index.ejs",{blogs: blogs});
  });

app.post("/", (req, res) => {
  const blogId = req.body.blogId;
  console.log(blogId);

  if (blogId){
    const blogIndex = blogs.findIndex(blog => blog.id === blogId);
    blogs[blogIndex].title = req.body.title;
    blogs[blogIndex].blog = req.body.blog;
  } else {
    const newBlog = {
      id: counter,
      title: req.body.title,
      blog: req.body.blog
    }
    counter ++
    blogs.push(newBlog);
    console.log(newBlog);
  }
  res.redirect("/");

})

app.get("/delete/:blogId", (req, res) =>{
  const bId = req.params.blogId;
  console.log(bId);
  const upBlogs = blogs.filter(blog => blog.id != bId);
  console.log(upBlogs);
  blogs = upBlogs;

  res.redirect("/");
})

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
