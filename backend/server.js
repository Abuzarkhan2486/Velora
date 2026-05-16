const app = require("./src/app");
const connectionToDb = require("./src/config/db");


const port = process.env.PORT

connectionToDb()

app.listen(port,()=>{
    console.log("server is listining at ",port);
    
})
