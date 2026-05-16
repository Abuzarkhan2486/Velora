const app = require("./src/app");
const connectionToDb = require("./src/config/db");
// const authRoute= require("./src/routes/authRoute.js")

const port = process.env.PORT

connectionToDb()
// app.use("/api/auth",authRoute)
app.listen(port,()=>{
    console.log("server is listining at ",port);
    
})
