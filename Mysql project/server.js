const express=require('express');
const app=express();
const connectDB=require("./DB");
connectDB();



app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(5000,console.log("app listening at port"));