// export const asyncHandler=(fn)=>(req,res,next)=>{
//     Promise.resolve(fn(req,res,next)).cath(next)
    
// }


export const asyncRapper=(fn)=>{

    return (req,res,next)=>{

        Promise.resolve(fn(req,res,next)).catch((error)=>(next(error)))
    }
}

