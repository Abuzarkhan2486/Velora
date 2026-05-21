const express= require("express")
const { getAllProductController, createProductController, updateSingleProductController, getSingleProductController, deleteProductController, updateSingleValueoOfProductContrller } = require("../controllers/productController")

const router = express.Router()



router.post("/create-product",createProductController)
router.get("/",getAllProductController)
router.get("/singleproduct/:id",getSingleProductController)
router.put("/:productId",updateSingleProductController)
router.get("/delete/:productId",deleteProductController)
router.patch("/update-single/:productid",authMidleware,updateSingleValueoOfProductContrller)

module.exports=router