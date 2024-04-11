import express from "express";
import userRoute from "./Routes/user.route.js";

import mongoose from 'mongoose';

// MongoDB connection URI
const uri = "mongodb+srv://dibya:dibya2024@exelixi.5igzebb.mongodb.net/";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
dbName: 'Exelixi' // Replace 'your_database_name_here' with your actual database name
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
console.log("Connected to MongoDB successfully");
});




const app = express();
app.use(express.json())
app.use("/",userRoute)
app.listen(3000,()=>{
    console.log("Server Running on Port 3000")
})