const { default: mongoose } = require("mongoose");

const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
      price:{
        type:String,
        required:true
    }
})


const productModel= mongoose.model("product",productSchema)

module.exports=productModel