const productModel = require("../models/product.model")


const createProductController = async (req, res) => {
    try {

        let { productName, description, price } = req.body


        if (!productName || !price || !description) {

            return res.status(400).json({
                message: "all fields are required to create a product ",
                success: false
            })
        }

        let newproduct = await productModel.create({
            productName,
            description,
            price
        })


        return res.status(201).json({
            message: "product created ",
            success: true
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "invalid error/ internal error"
        })
    }
}

const getAllProductController = async (req, res) => {
    try {

        let product = await productModel.find()

        return res.status(200).json({
            product: product,
            message: "all product are fetched "
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "invalid error "
        })
    }
}

const updateSingleProductController = async (req, res) => {

    try {
        let { id } = req.params



        if (!id) {
            return res.status(400).json({
                message: "id required/ id not found"
            })
        }

        let product = await productModel.findById({ id })

        if (!product) {

            return res.status(400).json({
                message: "product not matched "
            })
        }
        let { productName, description, price } = req.body


        if (!productName || !price || !description) {

            return res.status(400).json({
                message: "all fields are required to create a product ",
                success: false
            })
        }


        await productModel.findByIdAndUpdate(id, {
            productName,
            description,
            price
        },
            {
                new: true, runValidators: true
            })


        return res.status(200).json({
            success: true,
            messageL: "fetched successfully",
            product
        })



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "internal server error"
        })

    }
}


const getSingleProductController = async (req, res) => {
    try {
        let productid = req.params.productid
        if (!productid) {
            return res.status(401).json({
                message: "id not mached"
            })
        }

        let pro = await productModel.findById(productid)
        if (!pro) {
            return res.status(400).json({
                message: "product not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "product",
            product: pro
        })

    } catch (error) {
     return   res.status(400).json({
            message: "error in controller"
        })
    }
}

const deleteProductController = async (req, res) => {
    try {
        let productid = req.params.productid
        if (!productid) {
            return res.status(401).json({
                message: "id not found"
            })
        }

        let deleteproduct = await productModel.findByIdAndDelete(productid)

        // let user = await UserModel.findById(req.user._id);

        // let updatedUserProducts = user.products.filter((elem) => {
        //   elem !== deLPro._id;
        // });

        // user.products = updatedUserProducts;
        // await user.save();

        let updateUser = await UserModel.findByIdAndUpdate(
            req.user._id,
            {
                $pull: { products: productid },
            },
            { new: true }
        );

        return res.status(200).json({
            message:"delete product"
        })




    } catch (error) {
      return  res.status(400).json({
            message: "error in controller "
        })
    }
}


const updateSingleValueoOfProductContrller = async (req, res) => {
    try {
        let productid = req.params.productid
        if (!productid) {
            return res.status(401).json({
                message: "id not found"
            })
        }

        let update = req.body
        if (!update) {
            return res.status(401).json({
                message: "enter the value"
            })
        }

        let updatedSinglevalue = await productModel.findByIdAndUpdate(
            productid,
            {
                $set: update
            },
            { new: true, runValidators: true }
        )

        return res.status(200).json({
            success: true,
            message: "product updated",
            product: updatedSinglevalue
        })


    } catch (error) {
     return   res.status(400).json({
            message: "error in controller "
        })
    }
}


module.exports = {
    getAllProductController,
    createProductController,
    updateSingleProductController,
    getSingleProductController,
    deleteProductController,
    updateSingleValueoOfProductContrller
}