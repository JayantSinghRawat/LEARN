import mongoose,{Document} from "mongoose";


interface Ichat extends Document{
    from:string;
    to : string;
    msg : string;
    created_at : Date;
}

const chatSchema = new mongoose.Schema<Ichat>({
    from : {
        type: String,
        required:true,
    },
    to :{
        type:String,
        required:true,
    },
    msg : {
        type:String,
        maxLength:50
    },
    created_at:{
        type:Date,
        required:true
    }
})

const chat = mongoose.model<Ichat>("chat", chatSchema);

export default chat;
