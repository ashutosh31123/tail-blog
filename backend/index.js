const express = require('express');
const app=express()
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const authRoute= require('./routes/auth');
const userRoute= require('./routes/users');
const { json } = require('stream/consumers');

//database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_USER)
        console.log("Database is added succesfully");
    }
    catch(err){
        console.log(err);
    }
}

//middlewares
dotenv.config();
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)

app.listen(process.env.PORT, ()=>{
    connectDB();
    console.log(`app is running on port 5000`);
})

//Armp75XfTyw2LUqd