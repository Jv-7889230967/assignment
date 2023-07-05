const express=require('express');
const app=express();
const Userroutes=require("./Routes/Userroutes");
const connectDB=require("./DB");

connectDB();



app.get("/",(req,res)=>{
    res.send("hello world");
})
app.use(express.json());
app.use('/api/user',Userroutes);
app.listen(5000,console.log("app listening at port"));