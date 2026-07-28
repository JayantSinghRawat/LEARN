import express from "express";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";
import chat from "./models/chat.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
main()
    .then(() => {
    console.log("Connection sucessful");
})
    .catch((err) => {
    console.error("Error:", err);
});
async function main() {
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
// index route
app.get('/chats', async (req, res) => {
    let chats = await chat.find();
    console.log(chats);
    res.render("index.ejs", { chats });
});
app.get('/', (req, res) => {
    res.send("working");
});
app.listen(port, () => {
    console.log(`serever is live at localhost ${port}`);
});
