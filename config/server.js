const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 6000;

const userRoute = require('../app/routes/userRoute');
const shipmentRoute = require('../app/routes/shipmentRoute');
const productRoute = require('../app/routes/productRoute');
const wishlistRoute = require('../app/routes/wishlistRoute');
const cartRoute = require('../app/routes/cartRoute');
const cartProductRoute = require('../app/routes/cartProductRoute');
const reviewRoute = require('../app/routes/reviewRoute');
const orderRoute = require('../app/routes/orderRoute');
const orderItemRoute = require('../app/routes/orderItemRoute');

app.get("/", (req, res) => res.send("Halo! Ini Farah!"));
app.listen(port, () =>
console.log(`Server berjalan di http://localhost:${port} !`)
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));


app.use('/user', userRoute);
app.use('/shipment', shipmentRoute);
app.use('/product', productRoute);
app.use('/wishlist', wishlistRoute);
app.use('/cart', cartRoute);
app.use('/cart-product', cartProductRoute);
app.use('/review', reviewRoute);
app.use('/order', orderRoute);
app.use('/order-item', orderItemRoute);

module.exports = app;
