const express= require("express")
const { getAllProductController, createProductController } = require("../controllers/productController")

const router = express.Router()



router.post("/create-product",createProductController)
router.get("/",getAllProductController)

module.exports=router