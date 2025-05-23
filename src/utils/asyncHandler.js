const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
                .catch(err => next(err))
    }
}




// async-await handler for express routes
/*
const asyncHandler = (fn) => 
    async (req, res, next) => {
        try {
            await fn(req, res, next);   
        } catch (err) {
            res.status(err.code)
                .json({
                    success: false,
                    message: err.message 
                })
        }
    }
*/

export default asyncHandler