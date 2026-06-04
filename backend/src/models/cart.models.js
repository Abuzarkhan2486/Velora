const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
        },
        items:[
            {
                products_id:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"products"
                },
                quantity:{
                    type:Number
                }
            }
        ]
    }
)


const cartModel=mongoose.model("carts",cartSchema)
module.exports=cartModel