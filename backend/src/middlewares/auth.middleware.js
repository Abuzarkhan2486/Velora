const authMiddleware=async(req,res)=>{
    try {
        let {email}=req.body
    } catch (error) {
        return res.status(500).json({
            message:"internal server error ",
            success:false
        })
    }
}