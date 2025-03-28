import carts from "../models/cart.js";

// //add products

export const cart = async (req, res) => {
    const newCart = new carts(req.body)
    try {
        const cart = await newCart.save();
        return res.json({ success: true, carts: cart });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// // update product
export const upCart = async (req, res) => {

    try {

        const cart = await carts.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        if (!cart) {
            return res.json({ success: false, message: `There is no cart with ${req.params.id} id. ` })
        }
        return res.json({ success: true, message: " cart update successfully", cart })
    } catch (err) {
        return res.json({ success: false, message: "cart can't update", err, })
    }
}

// // find products

export const cartFind = async (req, res) => {
    const id = req.params.userId;

    try {
        const cart = await carts.find({ userId: id })

        if (!cart || cart === null) {
            return res.json({ success: true, message: `There is no carts with ${id} id.` })

        }

        return res.json({ success: true, message: product })

    } catch (error) {
        return res.json({ success: false, message: "carts can't find." })
    }
}

// // delete products
export const cartDelete = async (req, res) => {
    const id = req.params.id;

    try {
        const cart = await carts.findByIdAndDelete(id)

        if (!cart) {
            return res.json({ success: false, message: "cart can't be deleted." })
        }

        return res.json({ success: true, message: "cart delete successfully" })


    } catch (error) {
        return res.json({ success: false, message: "cart can't find" })
    }
}

// // find all products

export const allCartGet = async (req, res) => {
    try {
        let cart;
        cart = await carts.find();
        return res.json({ success: true, message: "Carts retrieved successfully", carts: cart });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}



