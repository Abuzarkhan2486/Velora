const { default: mongoose } = require("mongoose")

const connectionToDb=()=>{
    try {
        let res = mongoose.connect("mongodb://0.0.0.0/Velora")
        if(res){
           
           return  console.log("connect to DB");
            
        }
    } catch (error) {
        console.log("db connection error");
        
        
    }
}

module.exports= connectionToDb