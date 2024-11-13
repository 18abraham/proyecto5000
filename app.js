import cors from "cors";
import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import {test} from "./backend/controllers/alumno.controller.js";

dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("funciona")
})
.catch((error)=>{
    console.log("no funciona ya valio", error )
})

const app=express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("se escucha el servidor")
})

test()