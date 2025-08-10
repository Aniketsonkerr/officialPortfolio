import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config({path:"./.env"});
const app = express();
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`server running on port ${port}` )
})

app.use(cors());

mongoose.connect(process.env.MONGODBURI)

const db = mongoose.connection;

db.on("open",()=>{
    console.log("database connection successfull");
})

db.on("error",()=>{
   console.log("database connection failed");
})
