const Product = require('../models/Product')

exports.createOrder = async (req, res) => {
    const { name, color, price } = req.body
    const newProduct = new Product({ name, price, color })
    newProduct.save()
    res.json('created').status(200)
}

exports.getOrder = async (req, res) => {
    const id = req.params.id;
    let product = await Product.findOne({ _id: id })
    res.json(product).status(200)
}

exports.getAll = async (req, res) => {
    const data = await Product.find()
    res.json({ data: (data), length:data.length})
}

exports.updateProduct = async (req, res) => {
    try {
        const { id, name, color, price } = req.body
        await Product.findByIdAndUpdate(id, { $set: { name, color, price } })
        const updatedProduct = await Product.findById({ _id: id })
        res.json(updatedProduct)
    }
    catch (err) {
        console.log(err);
    }
}

exports.getByName = async (req, res) => {
    const name = req.query.name
    const product = await Product.find({ name })
     if (product.length == 0) {
         res.json('product not found')
     }
     res.json(product)
}

exports.getByColor = async (req, res) => {
    const color = req.query.color
    try{
        const product = await Product.find({ color })
         if (product.length == 0) {
             res.json('product not found')
         }
         else{
             res.json(product)
         }
    }
    catch(err){
        console.log(err)
    }
}

exports.deleteProduct=async(req,res)=>{
    const id=req.params.id
    try{
        await Product.findByIdAndDelete(id)
        res.json("deleted")
    }
    catch(err){
        console.log(err)
    }
}
