import mongoose from "mongoose";
import chat from "./models/chat.js";

main()
    .then(()=>{
        console.log("Connection sucessful");
    })
    .catch((err) => {
        console.error("Error:", err); 
    });
async function main():Promise<void> {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}




interface IChat {
    from: string;
    to: string;
    msg: string;
    created_at: Date;
}

const chatArr: IChat[] = [
    {
        from: "neha",
        to: "priya",
        msg: "Hey Priya, how are you?",
        created_at: new Date(),
    },
    {
        from: "priya",
        to: "neha",
        msg: "I'm good! How about you?",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "priya",
        msg: "I'm doing great!",
        created_at: new Date(),
    },
    {
        from: "rahul",
        to: "aman",
        msg: "Are you coming to college tomorrow?",
        created_at: new Date(),
    },
    {
        from: "aman",
        to: "rahul",
        msg: "Yes, I'll be there at 9 AM.",
        created_at: new Date(),
    },
    {
        from: "jayant",
        to: "neha",
        msg: "Can you send me the notes?",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "jayant",
        msg: "Sure, I'll send them now.",
        created_at: new Date(),
    },
];

chat.insertMany(chatArr);
