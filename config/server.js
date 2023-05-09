const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const userRoute = require('../app/routes/userRoute');


app.get("/", (req, res) => res.send("Halo! Ini Farah!"));
app.listen(port, () =>
console.log(`Server berjalan di http://localhost:${port} !`)
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/user', userRoute);

module.exports = app;
