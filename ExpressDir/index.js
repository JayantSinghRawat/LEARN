const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

app.get('/',(req,res) => {
    res.send('hello i am  root path');
})

app.get('/:username/:id',(req,res) => {
    let {username,id} = req.params;

    res.send(`welcome to the page of ${username} and your id is ${id}`);
})

app.get('/search',(req,res) => {
    let {q} = req.query;
    if(!q){
        res.send('<h1>Search query is empty</h1>');
    }
    res.send(`<h1>Search results for ${q}</h1>`);
})