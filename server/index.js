import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI).then(console.log(`db connected`));
const app = express();
const port = process.env.SERVER_PORT || 4000;


app.get('/', (req, res) => {
    res.send("Hello World");
})



app.listen(port, () => {
    console.log(`serever is running at http://localhost:${port}`);
})