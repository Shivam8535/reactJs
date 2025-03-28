import jwt from "jsonwebtoken";
import User from "../models/user.js";

// user register

export const register = async (req, res) => {

    const { username, email, password } = req.body;
    const alUser = await User.findOne({ $or: [{ username }, { email }] });

    if (alUser) {
        return res.json({ success: false, message: "User already registered" });
    }

    try {
        const user = new User({ username, email, password });

        const u = await user.save();

        console.log(u)

        return res.json({ success: true, message: "User registered successfully." })

    } catch (error) {

        return res.json({ success: false, message: "User can't register." })

    }

}


// user login
export const login = async (req, res) => {

    var username = req.body.username || req.params.username;
    var o = req.body.password || req.params.password;
    var opassword = String(o);

    try {

        const user = await User.findOne({ username });

        if (!user) {

            res.json({ success: false, message: "User does not exit." })

        } else {

            if (opassword !== user.password) {

                return res.json({ success: false, message: "invalid password" })

            }
            else {

                const token = jwt.sign({
                    id: user._id, isAdmin: user.isAdmin,
                }, "sec",
                    { expiresIn: '1d' }
                )

                const {  password, ...others } = user._doc;

                return res.json({ success: true, message: "Your are loged in", ...others, token })
            }
        }

    } catch (error) {

        return res.json({ success: false, message: "you cant login", error: error })
    }


}


// get user
export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        res.json({ success: true, user })

    } catch (error) {
        return res.json({ success: false, error })
    }
}

// find all
export const getAllUser = async (req, res) => {
    const query = req.query.new ;
    try {
        const user = query ? await User.find().sort({_id: -1}).limit(1) : await User.find();

        res.json({ success: true, user })

    } catch (error) {
        return res.json({ success: false, error })
    }
}


//agrate user state

export const userAgg = async (_, res) => {

    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);

        return res.json({ success: true, data });

    } catch (error) {
        return res.status(500).json({ success: false, error });
    }
}