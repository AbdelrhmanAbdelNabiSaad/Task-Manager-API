const tasksServices = require('../services/task.service');

async function getAllTasks(req,res) {

    const tasks = await tasksServices.getAllTasks(req.query);

    if(!tasks) {
        return res.status(400).json({
            success: false,
            message: 'Tasks not data.'
        })
    }

   return  res.status(200).json({
        success: true,
        message: 'Get all tasks successfully.',
        data: tasks
    })

}

async function createTask(req,res) {

    const task = await tasksServices.createTask(req.body);

    return res.status(201).json({
        success: true,
        message: 'Created task successfully.',
        data: task
    })

}

async function getTaskById(req,res) {

    const task = await tasksServices.getTaskById(req.params.id);

    if(!task) {
        return res.status(404).json({
            success:false,
            message: 'Task not found',
        })
    }

    return res.status(200).json({
        success: true,
        message: 'Get task successfully.',
        data: task
    })

}

async function updateTask(req,res) {

    const task = await tasksServices.updateTask(req.params.id, req.body);

    if(!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found.'
        })
    }

    return res.status(200).json({
        success: true,
        message: 'Updated task successfully.',
        data: task
    })

}

async function deleteTask(req,res) {

    const task = await tasksServices.deleteTask(req.params.id);

    if(!task) {
        return res.status(404).json({
            success: false,
            message: 'Task not found.'
        })
    }

    return res.status(200).json({
        success: true,
        message: 'Deleted task successfully.',
        data: task
    })

}

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
}