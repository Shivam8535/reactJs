import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv()
mongoose.connect(process.env.DB_URI).then(console.log(`db connected`));
