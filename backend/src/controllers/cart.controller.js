const cartModel = require("../models/cart.models")
const userModel = require("../models/user.models")


const addToCartController=async(req,res)=>{
    try {
        let {productid,userid}=req.params
        if(!productid||!userid){
            return res.status(400).json({
                message:"invalid id"
            })
        }

        let user = await userModel.findById(userid)

        let cart =await cartModel.findByIdAndUpdate(
            user.cart,
            {
                $push:{
                    items:{
                         products_id:productid,
                         quantity:1

                    }
                }
            },
            {new:true}
        )

        return res.status(200).json({
            success:true,
            message:"added to cart",
            cart
        })
        
    } catch (error) {
     return   res.status(400).json({
            message:"error in controller"
        })
    }
}


const incrementController=async(req,res)=>{
    try {
        let {cartid,productid}=req.params
        if(!cartid||!productid){
            return res.status(400).json({
                message:"id not found"
            })
        }

        let cart=await cartModel.findById(cartid)
        
        let product = cart.items.find((elem)=>
            elem.products_id.toString() === productid
        )

        product.quantity +=1
        await cart.save()

        return res.status(200).json({
            success:true,
            message:"incremented",
            cart
        })


    } catch (error) {
        return res.status(400).json({
            message:"error in controller "
        })
    }
}


const decrementController=async(req,res)=>{
    try {
        let {cartid,productid}=req.params

        if(!cartid||!productid){
            return res.status(400).json({
                message:"id not found"
            })
        }

        let cart=await cartModel.findById(cartid)
        
        let product = cart.items.find((elem)=>
            elem.products_id.toString() === productid
        )


        if(product){
            if(product.quantity===0){
                return res.status(400).json({
                    message:"quantity is 0"
                })
            }

            product.quantity -=1
        }
        
        await cart.save()

        return res.status(200).json({
            success:true,
            message:"decremented",
            cart
        })


    } catch (error) {
        return res.status(400).json({
            message:"error in controller "
        })
    }
}


const deleteController=async(req,res)=>{
    try {
        let {cartid,productid}=req.params

        if(!cartid||!productid){
            return res.status(400).json({
                message:"id not found"
            })
        }

        let cart=await cartModel.findById(cartid)
        
        let updatedproduct = cart.items.filter((elem)=>
            elem.products_id.toString() !== productid
        )

        cart.items=updatedproduct
        
        await cart.save()

        return res.status(200).json({
            success:true,
            message:"product deleted from cart",
            cart
        })


    } catch (error) {
        return res.status(400).json({
            message:"error in controller "
        })
    }
}

module.exports={
    addToCartController,
    incrementController,
    decrementController,
    deleteController
}