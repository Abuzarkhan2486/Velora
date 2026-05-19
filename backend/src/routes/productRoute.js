const express= require("express")
const { getAllProductController, createProductController, updateSingleProductController } = require("../controllers/productController")

const router = express.Router()



router.post("/create-product",createProductController)
router.get("/",getAllProductController)
router.get("/:productId",updateSingleProductController)

module.exports=router