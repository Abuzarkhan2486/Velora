const express=require("express")

const router=express.Router()

router.post("/add/:productid/:userid")
router.post("/increment/:productid/:cartid")
router.post("/decrement/:productid/:cartid")
router.post("/delete/:productid/:cartid")

module.exports=router