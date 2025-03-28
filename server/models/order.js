import mongoose from "mongoose";

const order = mongoose.Schema({
    userId: { type: String, require: true },
    products: [
        {
            productId: { type: String, },
            quantity: { type: Number, default: 1 },
        }
    ],
    amount: { type: Number, require: true },
    address: {
        type: Object, require: true,
        status: { type: String, require: true },
        street: { type: String, require: true },
        city: { type: String, require: true}
    }

}, {
    timestamps: true
})

const orders = mongoose.models.order || mongoose.model("orders", order);
export default orders;