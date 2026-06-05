const express=require("express")

const router=express.Router()

router.post("/add/:productid/:userid")
router.post("/increment/:productid/:cartid")
router.post("/decrement/:productid/:cartid",decrementController)
router.post("/delete/:productid/:cartid",deleteController)

module.exports=router