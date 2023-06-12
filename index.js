
const express = require("express");
const mongoose = require("mongoose");
const { connection,connectDB } = require("./db");
const { userRouter } = require("./router/user.router");
const { postRouter } = require("./router/post.router");
const cors = require("cors");
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

app.use("/users",userRouter);
app.use("/posts",postRouter);

app.get("/",(req,res)=>{
    res.status(200).send("Home page")
})



// app.listen(process.env.port, async()=>{
   
//     try {
//         await connection
//         console.log("connected to DB");
//         console.log(`server is running on port 8080...`)
        
//     } catch (err) {
//         console.log("cannot connect to DB something went wrong");
//         console.log(err);
//     }
    
    
// })


connectDB().then(()=>{
    app.listen(process.env.port, async()=>{
        try {
            console.log(`Server running at port ${process.env.port}`);
        } catch (error) {
           console.log(error.message); 
           console.log("Something went wrong!");
        }
    })
})