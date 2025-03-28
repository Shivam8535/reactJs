import Product from "../models/product.js";

//add products

export const products = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const saveProduct = await newProduct.save();
        return res.json({ success: true, product: saveProduct });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// update product
export const upProduct = async (req, res) => {

    try {

        const product = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        if (!product) {
            return res.json({ success: false, message: `There is no products with ${req.params.id} id. ` })
        }
        return res.json({ success: true, message: " product update successfully", product })
    } catch (err) {
        return res.json({ success: false, message: "Product can't update", err, })
    }
}

// find products

export const prFind = async (req, res) => {
    const pd = req.params.id;

    try {
        const product = await Product.findById(pd)

        if (!product || product === null) {
            return res.json({ success: true, message: `There is no products with ${pd} id.` })

        }

        return res.json({ success: true, message: product })

    } catch (error) {
        return res.json({ success: false, message: "product can't find." })
    }
}

// delete products
export const prDelete = async (req, res) => {
    const pd = req.params.id;

    try {
        const product = await Product.findByIdAndDelete(pd)

        if (!product) {
            return res.json({ success: false, message: "product can't be deleted." })
        }

        return res.json({ success: true, message: "product delete successfully" })


    } catch (error) {
        return res.json({ success: false, message: "product can't find" })
    }
}

// find all products

export const allPdGet = async (req, res) => {
    const query = req.query.new;
    const qCategory = req.query.category;
    try {
        let pd;
        if (query) {
            pd = await Product.find().sort({ createdAt: -1 }).limit(5);
        }
        else if (qCategory) {
            pd = await Product.find({ categorie: { $in: [qCategory] } })
        }
        else {
            pd = await Product.find();
        }

        return res.json({ success: true, message: "Products retrieved successfully", products: pd });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}



