require("dotenv").config()
const express = require("express")
// const cookieparser = require("cookie-parser")
const authRoute= require("./routes/authRoute.js")
const cookieParser = require("cookie-parser")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extend:true}))
app.use(cookieParser())


app.use("/api/auth",authRoute)


module.exports = app