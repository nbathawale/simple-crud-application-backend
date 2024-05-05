const express = require('express');
const router = express.Router();
const { getProducts,getProduct,createProduct,updateProduct,deleteProduct } = require('../controller/product.controller.js');


router.get("/",getProducts);
router.get("/:id",getProduct);

//create a Product
router.post("/", createProduct);

//update a product
router.put("/:id",updateProduct)

//delete a product
router.delete("/:id",deleteProduct)


module.exports = router;