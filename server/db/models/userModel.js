import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    _id: false,
    username: { type: String },
    password: { type: String },
    email: { type: String },
});

const user = mongoose.model('user', userSchema)
