
import express,{Request,Response,NextFunction} from "express";
import ExpressError from "./ExpressError.js";

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
    throw new ExpressError(401,"ACCESS DENIED");
}
app.use('/random',(req:Request,res:Response,next:NextFunction)=>{
    console.log("random only middleware");
    next();
})


app.get('/err',(req:Request,res:Response)=>{
    abcd = abcd;
})

app.get('/api',token,(req:Request,res:Response)=>{
    res.send("data");
})

app.get('/admin',(req:Request,res:Response)=>{
    throw new ExpressError(403,"Access to Admin is Forbidden")
})


app.use((err:ExpressError,req:Request,res:Response,next:NextFunction)=>{
    let {status = 500,message} = err;
    res.status(status).send(message);
})



// app.get("/",(req:Request,res:Response)=>{
//     res.send("hi iam a root");
// })
// app.get("/random",(req:Request,res:Response)=>{
//     res.send("this is a random page")
// })

// app.use((req:Request,res:Response)=>{
//     res.status(404).send("path not found 404")
// })

app.listen(port,()=>{
    console.log(`server is working on localhost ${port}`)
})
