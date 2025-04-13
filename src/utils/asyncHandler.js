const asyncHandler = (requestHandler) => {
    (req, res, next) => {
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
            res.status(err.code || 500)
                .json({
                    success: false,
                    message: err.message 
                })
        }
    }
*/

export {asyncHandler}