//............promise


const asyncHandler =(requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }

}

export {asyncHandler}

//.............using try catch async 

// const asyncHandler = (fn) => async(req, res, next) => {
//     try{

//     }catch(error){
//         resizeBy.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

