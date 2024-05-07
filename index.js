const serverless = require("serverless-http");
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./src/app/models/product.model.js');
const productRoute = require("./src/routes/product.route.js");
const app = express();
require('./src/config/db_connect.js')

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Routes
app.use("/api/products",productRoute);


// mongoose.connect("mongodb://localhost/newdb")
// .then((db) => {
//    console.log('DB Connected');
// })
// .catch((err) => {
//     console.log('Error Detected')
// })

app.get('/',(req,res) => {
        res.send('Hello LOvely World! Hello Hii')
})

//app.listen(3000)

module.exports.main = serverless(app);
