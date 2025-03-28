import mongoose from "mongoose";

const product = mongoose.Schema({
    title: { type: String, require: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    categorie: { type: Array, },
    size: { type: String, },
    prize: { type: Number, require: true },
    color: { type: String, },

},{
    timestamps: true
})


const Product = mongoose.models.product || mongoose.model('Products', product);

export default Product;