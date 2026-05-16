const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const registerController=async(req,res)=>{
    try {
         let {name,email,password,}=req.body

         if(!name|| !email || !password){
            res.status(400).json({
                success:false,
                message:"all feilds are required"

            })
         }

         let  isexisteduser= userModel.findOne({email})

         if(isexisteduser){

           return  res.status(400).json({
                success:false,
                message:"users already existed"

            })
         }

         let hashpass= bcrypt.hash(password,10)

         let newuser= userModel.create({
            name,
            email,
            password:hashpass
         })

         let token = jwt.sign({id:newuser._id},process.env.JWT_SECRET,{expiresIn:"1h"})





         
     
    } catch (error) {
        return res.status(500).json({
            message:"internal server error ",
            success:false
        })
        
    }
}

module.exports={
    registerController
}