import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const verifyJwt = (req, res, next) => {

    const authToken = req.headers.token;

    if (!authToken) {
        return res.json({ success: false, message: "You are not Authenticated!" });
    } else {
        jwt.verify(authToken, process.env.JWT_SEC, (err, user) => {
            if (err) {
                return res.json({ success: false, message: "Token has expired" });
            } else {
                req.user = user;
                next();
            }
        });
    }
};

export const vrjWt = async (req, res) => {
    verifyJwt(req, res, async () => {

        const id = req.params.id;
        if (req.user.isAdmin) {
            try {
                await User.findByIdAndUpdate(id, {
                    $set: req.body
                }, { new: true });

                return res.json({ success: true, message: "User updated" });
            } catch (error) {
                return res.json({ success: false, message: "User can't updated", error });
            }
        } else {
            return res.json({ success: false, message: "You are not allowed to do that!", id });
        }
    });
};


export const verifyAdmin = (req, res, next) => {

        try {
            if (req.user.isAdmin) {
                next();
            } else {
                return res.json({ success: false, message: "You are not allowed to do that!" });
            }

        } catch (error) {
            return res.json({ success: false, message: "user can't find" })
        }

}