import e from "express";
import { getAllUser, getUser, login, register, userAgg } from "../controller/userAuth.js";
import { verifyAdmin, verifyJwt, vrjWt } from "../middleware/verifyJToken.js";
import { allPdGet, prDelete, prFind, products, upProduct } from "../controller/productC.js";
import { allCartGet, cart, cartDelete, cartFind, upCart } from "../controller/cartC.js";
import { allorders, order, orderDelete, orderFind, orderUpdate } from "../controller/orderC.js";

// user Routes
const userRoute = e.Router();

userRoute.post('/register', register);
userRoute.post('/login', login);
userRoute.put("/update/:id", vrjWt);

userRoute.get("/user/:id", verifyJwt, verifyAdmin, getUser);
userRoute.get("/users", verifyJwt, verifyAdmin, getAllUser);
userRoute.get("/userStats", verifyJwt, verifyAdmin, userAgg);


// for product APIs
const prodRoute = e.Router();

prodRoute.post("/", verifyJwt, verifyAdmin, products);// for add products
prodRoute.delete("/:id", verifyJwt, verifyAdmin, prDelete);// for delete products
prodRoute.put("/:id", verifyJwt, verifyAdmin, upProduct);// for updated products
prodRoute.get("/:id", verifyJwt, prFind);
prodRoute.get("/", allPdGet);

// for carts APIs
const cartsRoute = e.Router();

cartsRoute.post("/", verifyJwt, cart);
cartsRoute.delete("/:id", verifyJwt, cartDelete);
cartsRoute.put("/:id", verifyJwt, upCart);
cartsRoute.get("/find/:userId", verifyJwt, cartFind);
cartsRoute.get("/", verifyJwt, verifyAdmin, allCartGet);

// APIs for order
const orderRoute = e.Router();

orderRoute.post("/", verifyJwt, order);
orderRoute.put("/:id", verifyJwt, verifyAdmin, orderUpdate);
orderRoute.delete("/:id", verifyJwt, verifyAdmin, orderDelete);
orderRoute.get("/find/:userId", verifyJwt, orderFind);
orderRoute.get("/", verifyJwt, verifyAdmin, allorders);





export { userRoute, prodRoute, cartsRoute, orderRoute };