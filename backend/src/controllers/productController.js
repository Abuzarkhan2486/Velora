const productModel = require("../models/product.model")


const createProductController=async(req,res)=>{
    try {

        let {productName,description,price}=req.body


        if(!productName||!price||!description){

            return res.status(400).json({
                message:"all fields are required to create a product ",
                success:false
            })
        }

        let newproduct = await productModel.create({
            productName,
            description,
            price
        })


        return res.status(201).json({
            message:"product created ",
            success:true
        })
        
    } catch (error) {
        console.log(error);
        
            return res.status(500).json({
                message:"invalid error/ internal error"
            })
    }
}




const getAllProductController=async(req,res)=>{
    try {

            let product = await productModel.find()

        return res.status(200).json({
            product:product,
            message:"all product are fetched "
        })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message:"invalid error "
        })
    }
}

module.exports={
    getAllProductController,
    createProductController
}