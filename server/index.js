import express from 'express';
import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
import { cartsRoute, orderRoute, prodRoute, userRoute } from './routes/routes.js';
configDotenv();
const port = process.env.PORT || 3000;
const app = express();

const dbUri = process.env.MONGODB_URI;
mongoose.connect(dbUri).then(() => {
    console.log('db connection is success');
}).catch((err) => {
    console.log(err);
});


// Api Routes
app.use(express.json())

app.use('/api', userRoute)
app.use("/api/products", prodRoute)
app.use("/api/carts/", cartsRoute)
app.use("/api/orders/", orderRoute)






app.listen(port, () => {
    console.log(`your server is running at http://localhost:${port}`);
});