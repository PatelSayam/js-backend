// configuration of env using require syntax
// require("dotenv").config({path: '../.env'}); 

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from './app.js'

dotenv.config({
    path: './.env'
})
//path is relative to process.cwd(), not the file location.
// process.cwd() => gives root folder => here it is /js-backend

connectDB()
.then(() => {

    // generally before the "listen" listener, we add the "error" listener for error handling
    app.on("error", (error) => {
        console.error("Error: ", error);
        throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    })
})
.catch(error => {
    console.error("Mongodb connection failed", error);    
})




/*
// this is one type of method to connect to mongodb using mongoose

import mongoose from "mongoose"
import { DB_NAME } from "./constants";
import express from "express"

const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        // generally before the "listen" listener, we add the "error" listener for error handling
        app.on("error", (error) => {
            console.error("Error: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})()
*/