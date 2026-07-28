
function validationUpdateTask(req,res,next) {


    const {status} = req.body;

    if(status && !['pending', 'completed'].includes(status)) {
        return res.status(400).json({
            success: false,
            message: 'Status must be pendding or completed'
        })
    }

    next();

}


module.exports = validationUpdateTask
