const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));


app.get('/', (req, res) => {
    // res.send("this is home");
    res.render("home.ejs");
    
});

app.get('/hello', (req, res) => {
    res.send("this is hello");
});

app.get('/rolldice', (req,res) =>{
    let diceval = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs",{diceval});
})


app.get('/ig/:username', (req,res) =>{
    let {username} = req.params;
    const instadata = require('./data.json');
    const data = instadata[username];
    console.log(instadata);
    console.log(data);
    if(data){
        res.render("instagram.ejs",{data});
    }else{
        res.render("error.ejs",{username});
    }
   
});