import express, { Request, Response } from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

import chat from "./models/chat.js";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port:number = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"))


main()
    .then(()=>{
        console.log("Connection sucessful");
    })
    .catch((err) => {
        console.error("Error:", err); 
    });
async function main():Promise<void> {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new chat({
//     from:"neha",
//     to:"priya",
//     msg:"hello priya this is neha",
//     created_at: new Date(),
// });
// chat1.save()
//     .then((res)=>{
//         console.log(res);
//     })

app.get('/',(req:Request,res:Response)=>{
    res.send("working"); 
})

// index route
app.get('/chats',async(req:Request,res:Response)=>{
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});

})


app.get('/chats/new',(req,res)=>{
    res.render("new.ejs");
})
app.post('/chats', (req:Request,res:Response)=>{
    let data = req.body;
    const newuser = new chat({
        from:data.from,
        to : data.to,
        msg : data.msg,
        created_at: new Date()
    })
     newuser.save()
        .then((saved)=>{
            console.log(saved);
            res.redirect('/chats');
        })
        .catch((err)=>{
            console.log(err);
            res.send("err while saving to db");
        })
})
app.delete('/chats/:id',async (req:Request,res:Response)=>{
    let id = req.params.id;
    await chat.findByIdAndDelete(id);
    res.redirect("/chats");
})


app.get("/chats/:id/edit",async (req:Request,res:Response)=>{
    let id = req.params.id;
    console.log(id);
    let data = await chat.findById(id);
    res.render('edit.ejs',{data});
})

app.put("/chats/:id",async (req:Request,res:Response)=>{
    let id = req.params.id;
    let body = req.body;
    console.log(body.msg);
    let updatedchat = await chat.findByIdAndUpdate(
        id,
        {msg:body.msg.trim()}
    );
    console.log(updatedchat);
    res.redirect("/chats");

})





app.listen(port,()=>{
    console.log(`serever is live at localhost ${port}`);
})

