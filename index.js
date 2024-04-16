import express from "express";
import userRoute from "./Routes/user.route.js";
import cors from "cors";

import mongoose from "mongoose";

// MongoDB connection URI
const uri = "mongodb+srv://dibya:dibya2024@exelixi.5igzebb.mongodb.net/";

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "Exelixi", // Replace 'your_database_name_here' with your actual database name
});

// Check if the connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

const app = express();
app.use("/", express.static("Public"));
app.use(express.json());
// Use the cors middleware and whitelist all URLs
app.use(
  cors({
    origin: true,
  })
);
app.use("/v1/data", userRoute);
app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});
