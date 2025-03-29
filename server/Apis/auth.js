import { User } from "../db/models/userModel.js"



export const register = async (req, res) => {
    try {
        let user = await User(req.body);

            try {
                await user.save();
                if (user.save()) {
                    res.json({ success: true, message: "user register success!" })
                }
            } catch (error) {
                res.json({ success: false, message: `User already register` })
            }
        } catch (error) {
            res.json({ success: false, message: `User can't connect!, error is ${error}` })
            console.log("user con't connect!")
        }
    };


    // error
    export const login = async (req, res) => {
        const userEmail = req.body.email;

        try {
            const user = await User.findOne({ "email": userEmail })

        } catch (error) {
            res.json({ success: false, message: `User can't connected!, error is ${error}` })
            console.log("User can't connected!")
        }
    }