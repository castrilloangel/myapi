function errorlogs(err, req,res,next){
    console.log("errorLogs")
    console.error(err)
    next(err)

}
function handlerError(err,req,res,netx){
    console.log("hanlerError")
    res.status(501).json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = {
    errorLogs,
    handlerError
}