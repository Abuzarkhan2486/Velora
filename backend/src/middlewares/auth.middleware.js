const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")



const authMiddleware=async(req,res,next)=>{

    try {
        let {token} = req.cookie

        if(!token){
            return res.status(300).json({
                message:"token not verified ",
                success:false
            })
        }

        let decode = await  jwt.verify(token,process.env.JWT_SECRET)


        if(!decode){
            return res.status(300).json({
                message:"token not verified ",
                success:false
            })
        }

        let user = await userModel.findById(decode.id)



        req.user= user

        next()

    } catch (error) {
        return res.status(500).json({
            message:"internal server error ",
            success:false
        })
    }
}

module.exports={
    authMiddleware
}