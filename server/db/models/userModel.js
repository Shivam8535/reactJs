import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
});

export const User = mongoose.model('User', userSchema)
