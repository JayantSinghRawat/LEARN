const mongoose = require('mongoose');

main()
    .then((res)=>{
        console.log("connection sucessful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
});


const user = mongoose.model("user",userSchema);

// const user2 = new user({
//     name:"harshitha",
//     email:"gg@gmail.com",
//     age:21
// })

// user2.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// user.insertMany([
//     {name:"prakhar",email:"pra@gmail.com",age:50},
//     {name:"araya",email:"arya@gamil.com",age:40}
// ]).then((res)=>{
//     console.log(res);
// })

// user.findById('6a64acdf8539414f6fac9bd7')
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// user.updateOne({name:"jayant"},{age:40})
//     .then((res)=>{
//         console.log(res);
//     })

// user.deleteMany({age:{$gt:30}} )
//     .then((res)=>{
//         console.log(res);
//     })


user.findOneAndDelete({name:"harshitha"})
    .then((res)=>{
        console.log(res);
    })