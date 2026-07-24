const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const app = express(); 

const methodOverride = require("method-override");

const { v4: uuidv4 } = require('uuid');



app.use(methodOverride("_method"));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded({ extended: true }));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '12jan200$'
});

let getRandomUser = ()=> {
  return [
    faker.string.uuid(),
faker.internet.username(),
faker.internet.email(),
faker.internet.password(),
  ];
}






app.get("/",(req,res)=>{

        try{
            connection.query("select count(id) as count from user", (err,result)=>{
                if(err) throw err;
                res.render('home.ejs',{result :result[0].count});
            });
        }catch(err){
            console.log(err);
            return res.send("Database error");
        }

});

app.get("/users",(req,res)=>{
    try{
        connection.query("select id,username,email from user",(err,result)=>{
            if(err) throw err;
            res.render("users.ejs",{result});
        });
    }
    catch(err){
        console.log(err);
        return res.send("database err");
    }

})

app.get("/users/new" ,(req,res)=>{
    res.render("new.ejs")
})

app.post("/users",(req,res)=>{
    try{
        let id = uuidv4();
        let username = req.body.username;
        let email = req.body.email;
        let password = req.body.password;

        let q = "insert into user(id,username,email,password) values(?,?,?,?)"

        connection.query(q,[id,username,email,password],(err,result)=>{
            if(err) throw err;
            res.redirect("/users");
        });
    }catch(err){
        console.log(err);
        return res.send("database err");
    }

});
 

app.delete("/users/:id",(req,res)=>{
    try{
        let id = req.params.id;
        let q  ="delete from user where id = ?";
        connection.query(q,[id],(err,result)=>{
            if(err) throw err;
            res.redirect("/users");
        });
    }catch(err){
        console.log(err);
        return res.send("database error");
    }
});



app.get("/users/:id",(req,res)=>{
    let data = req.params;

    res.render("edit.ejs",{data});
})

app.patch("/users/:id",(req,res)=>{
    try{
        let id = req.params.id;
        let newusername = req.body.username;

        let q = "update user set username = ? where id = ?"

        connection.query(q,[newusername,id],(err,result)=>{
                if(err) throw err;
                res.redirect("/users");
        });
    }catch(err){
        console.log(err);
        return res.send("database err");
    }

});




const port = "3000";
app.listen(port,()=>{
    console.log(`server running on localhost:${port}`)
});





