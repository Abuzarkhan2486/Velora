require("dotenv").config()
const express = require("express")
const authRoute= require("./routes/authRoute.js")
const productRoute= require("./routes/productRoute.js")
const cookieParser = require("cookie-parser")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extend:true}))
app.use(cookieParser())


app.use("/api/auth",authRoute)
app.use("/api/product",productRoute)


module.exports = app