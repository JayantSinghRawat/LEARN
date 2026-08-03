
import express,{Request,Response,NextFunction} from "express";

declare global {
    namespace Express {
        interface Request {
            time: string;
        }
    }
}

const port:number = 3000;
const app = express();


// app.use((req:Request,res:Response,next:NextFunction)=>{
//     console.log("ji im first middleware");
//     next();
// })
// app.use((req:Request,res:Response,next:NextFunction)=>{
//     console.log("ji im second middleware");
//     next();
// })


//utility middleware

app.use((req:Request,res:Response,next:NextFunction)=>{
    req.time =  new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
})

const token = (req:Request,res:Response,next:NextFunction)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        return next();
    }
    throw new Error("ACCESS DENIED")
}
app.use('/random',(req:Request,res:Response,next:NextFunction)=>{
    console.log("random only middleware");
    next();
})

app.get('/wrong',(req:Request,res:Response)=>{
    // abcd = abcd;
})
app.get('/api',token,(req:Request,res:Response)=>{
    res.send("data");
})

app.get("/",(req:Request,res:Response)=>{
    res.send("hi iam a root");
})
app.get("/random",(req:Request,res:Response)=>{
    res.send("this is a random page")
})

app.use((req:Request,res:Response)=>{
    res.status(404).send("path not found 404")
})

app.listen(port,()=>{
    console.log(`server is working on localhost ${port}`)
})
