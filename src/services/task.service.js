const { readDB, saveDB } = require("../utils/file");
const Task = require('../models/task.model')


async function getAllTasks(query) {

  const {search, status, sort} = query;
  
  let filter = {};

  if(search) {

    filter.$or = [
      {
        title: {
          $regex: search,
          $options: "i"
        }
      },
      {
        description: {
          $regex: search,
          $options: "i"
        }
      }
    ]

  }

  if(status) {
    filter.status = status;
  }

    let taskQuery = Task.find(filter);

    if(sort === 'asc') {
      taskQuery = taskQuery.sort({createdAt: 1});
    }else if(sort === 'desc') {
      taskQuery = taskQuery.sort({createdAt:-1});
    }

    const tasks = await taskQuery;

    return  tasks;

}

async function createTask(data) {

  const task = await Task.create(data);

  return task;

}

async function getTaskById(id) {

  const task = await Task.findById(id);

  return task;

}

async function updateTask(id, updates) {

  const task = await Task.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });

  return task;

}

async function deleteTask(id) {

  const task = await Task.findByIdAndDelete(id);

  return task;

}

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
