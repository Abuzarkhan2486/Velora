const imagekit = require("imagekit")

const storageInstance= new imagekit({
    privateKey:process.env.IK_PRIVATE_KEY,
    publicKey:process.env.IK_PUBLIC_KEY,
    urlEndpoint:process.env.IK_URL_ENDPOINT
})


const sendImagetoIK = async(file,fileName)=>{
    const res = await storageInstance.upload({
        file,
        fileName,
        folder:"e-com"
    })

}

module.exports=sendImagetoIK