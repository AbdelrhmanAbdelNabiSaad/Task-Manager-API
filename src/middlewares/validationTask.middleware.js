function validationTask(req,res,next) {

    const {title, description} = req.body;

    if(!title || !description) {

        return res.status(400).json({
            success: false,
            message: 'Title and description are required.'
        })

    }


    if(typeof title !== 'string' || typeof description !== 'string') {
        
        return res.status(400).json({
            success: false,
            message: 'Title and description must be strings.'
        })

    }

    
    if(!title.trim() || !description.trim()) {

        return res.status(400).json({
            success: false,
            message: 'Title and description are required.'
        })
    }

    next();


}

module.exports = validationTask
