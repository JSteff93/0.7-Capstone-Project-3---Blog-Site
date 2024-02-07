import express from "express";
import bodyParser from "body-parser";
import jquery from "jquery";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var blogs = [];
var counter = 0;

app.get("/", (req, res) => {
    res.render("index.ejs")
  });

app.post("/post", (req, res) => {
    // blogs.push(req.body["blog"]);
    let blog = req.body["blog"];
    // counter++
    res.render("index.ejs", {content: blog, i: counter})
})

app.delete("/", (req, res) =>{
  res._destroy();
})

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
