import orders from "../models/order.js";

// //add order

export const order = async (req, res) => {
    const { userId, products, amount, address } = req.body;
    const newOrder = new orders({ userId, products, amount, address })
    try {
        const order = await newOrder.save();
        return res.json({ success: true, orders: order });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// // update order
export const orderUpdate = async (req, res) => {

    try {

        const order = await carts.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        if (!order) {
            return res.json({ success: false, message: `There is no order with ${req.params.id} id. ` })
        }
        return res.json({ success: true, message: " order update successfully", order })
    } catch (err) {
        return res.json({ success: false, message: "order can't update", err, })
    }
}

// // // find order

export const orderFind = async (req, res) => {
    const id = req.params.userId;

    try {
        const order = await orders.find({ userId: id })

        if (!order || order === null) {
            return res.json({ success: true, message: `There is no orders with ${id} id.` })

        }

        return res.json({ success: true, message: order })

    } catch (error) {
        return res.json({ success: false, message: "orders can't find." })
    }
}

// // // delete ordre
export const orderDelete = async (req, res) => {
    const id = req.params.id;

    try {
        const order = await orders.findByIdAndDelete(id)

        if (!order) {
            return res.json({ success: false, message: "order can't be deleted." })
        }

        return res.json({ success: true, message: "order delete successfully" })


    } catch (error) {
        return res.json({ success: false, message: "order can't find" })
    }
}

// // // find all order

export const allorders = async (req, res) => {
    try {
        let order;
        order = await orders.find();
        return res.json({ success: true, message: "Orders retrieved successfully", orders: order });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}


