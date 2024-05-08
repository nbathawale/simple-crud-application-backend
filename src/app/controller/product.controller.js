
const Product = require("../models/product.model.js")

const getProducts = async (req,res) =>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

const getProduct = async (req,res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

const createProduct = async (req,res) => {
    try{
        const product = await Product.create(req.body);
        console.log(product)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const updateProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            res.status(404).json({message : "Product not found"})
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({message : error.message})
    }
}

const deleteProduct = async (req,res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            res.status(404).json({message : "Product Not Found"})
        }

        res.status(200).json({message : "Product Deleted successfuly"});

    }catch(error){
        res.status(500).json({message : error.message});
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}