const express= require("express")
const { getAllProductController, createProductController, updateSingleProductController, getSingleProductController, deleteProductController } = require("../controllers/productController")

const router = express.Router()



router.post("/create-product",createProductController)
router.get("/",getAllProductController)
router.get("/singleproduct/:id",getSingleProductController)
router.get("/:productId",updateSingleProductController)
router.get("/delete/:productId",deleteProductController)

module.exports=router