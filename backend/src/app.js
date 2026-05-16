require("dotenv").config()
const express = require("express")
const authRoute= require("./routes/authRoute.js")
const app = express()


app.use(express.json())
app.use(express.urlencoded({extend:true}))


app.use("/api/auth",authRoute)


module.exports = app