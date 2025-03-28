import mongoose from "mongoose";

const cart = mongoose.Schema({
    userId: { type: String, require: true },
    product:[
        {
            productId:{ type: String, },
            quantity:{ type: Number, default: 1},
        }
    ]
    
},{
    timestamps: true
})


const carts = mongoose.models.cart || mongoose.model("carts", cart)

export default carts;