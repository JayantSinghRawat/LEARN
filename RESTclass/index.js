const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const { v4: uuidv4 } = require('uuid');

uuidv4(); // ⇨ 'b18794e8-5d0d-417c-b361-ba38e78411b4'


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


const methodOverride = require("method-override");

app.use(methodOverride("_method"));

let posts = [
    {
        id : uuidv4(),
        username : "jayant",
        content : "this is my first post"
    },
    {
        id : uuidv4(),  
        username : "joy",
        content : "nifty 50 invetser"
    },
    {   
        id : uuidv4(),
        username : "sachin",
        content : "cricket lover"
    }
];

app.get('/posts', (req, res) => {
    res.render("index.ejs",{posts});
});

app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});
app.post('/posts', (req, res) => {
    let {username, content} = req.body;
    posts.push({
        id: uuidv4(),
        username,
        content
    });
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let {id} = req.params;

    let post = posts.find((p)=> id === p.id);

    res.render("show.ejs",{post});
});

app.patch('/posts/:id', (req,res)=>{
    let {id} = req.params;
    let newcontent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newcontent;
    console.log(post);
    res.redirect('/posts');
    
});

app.get('/posts/:id/edit', (req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    console.log(id);
    res.render("edit.ejs",{post});

})

app.delete('/posts/:id', (req,res)=>{
    let {id} = req.params;
    posts = posts.filter((post)=> post.id !== id);
    res.redirect('/posts');
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 

