const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { asyncRapper } = require("../utils/asyncHandleer")

const registerController=asyncRapper(async(req,res)=>{
    
         let {name,email,password,}=req.body

         if(!name|| !email || !password){
            res.status(400).json({
                success:false,
                message:"all feilds are required"

            })
         }

         let  isexisteduser= await userModel.findOne({email})

         if(isexisteduser){

           return  res.status(400).json({
                success:false,
                message:"users already existed"

            })
         }

         let hashpass= await bcrypt.hash(password,10)

         let newuser=await  userModel.create({
            name,
            email,
            password:hashpass
         })

         let token = jwt.sign({id:newuser._id},process.env.JWT_SECRET,{expiresIn:"1h"})
         res.cookie("token",token)


         return res.status(200).json({
            message:"user crerated",
            user:newuser

         })

         
     
     
        console.log(error);
        
        return res.status(500).json({
            message:"internal server error ",
            success:false
        })
        
    
    })


const loginController= asyncRapper(async(req,res)=>{
    
        let {email,password}=req.body

        if (!email || !password){

            return res.status(300).json({
                success:false,
                message:"all feilds are required "
            })
        }

        let isuserExist = await userModel.findOne({email})
        console.log(isuserExist);
        

        if(!isuserExist){

            return res.status(300).json({
                message:"user does not exist ",
                success:false
            })
        }

        let checkpass = await bcrypt.compare(password,isuserExist.password)
        console.log(checkpass);
        
        if(!checkpass){

            return res.status(400).json({
                success:false,
                message:"password does not match"
            })
        }

        let token = jwt.sign({id:isuserExist._id},process.env.JWT_SECRET,{expiresIn:"1h"})
        res.cookie("token",token)   

        return res.status(200).json({
            message:"loged in user"
        })

   
        console.log(error);
        
        return res.status(500).json({
            message:"internal server error "
        })
        
    
})



module.exports={
    registerController,
    loginController
}