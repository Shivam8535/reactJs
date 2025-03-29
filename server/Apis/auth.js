import { User } from "../db/models/userModel.js"



export const register = async (req,res) => {
    const {username, password, email } = req.body;
    let user = await User(req.body);
    user.save();
    console.log(user.toJSON());
    res.send(user.toJSON());
}