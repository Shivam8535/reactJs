import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import "./db/config.js";
import cors from 'cors';
import { authRouter } from "./routers/routes.js";


const app = express();
const port = process.env.SERVER_PORT || 4000;
app.use(express.json())
app.use(cors())


// routers for Auth Api
app.use('/api', authRouter);


app.listen(port, () => {
    console.log(`serever is running at http://localhost:${port}`);
})