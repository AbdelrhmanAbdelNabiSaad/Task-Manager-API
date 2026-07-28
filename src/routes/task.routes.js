const express = require('express');
const router = express.Router();
const {getAllTasks, createTask, getTaskById, updateTask, deleteTask} = require('../controllers/task.controller');
const validationTask = require('../middlewares/validationTask.middleware');
const validationUpdateTask = require('../middlewares/validationUpdateTask.middleware');
const asyncHandler = require('../utils/asyncHandler')
/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Returns all tasks with optional search, filter and sorting.
 *     tags:
 *       - Tasks
 *
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         example: node
 *         description: Search in title or description
 *
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum:
 *             - pending
 *             - completed
 *         example: completed
 *
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum:
 *             - asc
 *             - desc
 *         example: asc
 *
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/', asyncHandler(getAllTasks));

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Get task by id
 *     tags:
 *       - Tasks
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *
 *     responses:
 *       200:
 *         description: Task found
 *
 *       404:
 *         description: Task not found
 */
router.get('/:id', asyncHandler(getTaskById))

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Update task
 *     tags:
 *       - Tasks
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             status: completed
 *
 *           schema:
 *             type: object
 *
 *             properties:
 *               title:
 *                 type: string
 *
 *               description:
 *                 type: string
 *
 *               status:
 *                 type: string
 *                 enum:
 *                   - pending
 *                   - completed
 *
 *     responses:
 *       200:
 *         description: Task updated
 *
 *       404:
 *         description: Task not found
 *
 *       400:
 *         description: Validation Error
 */

router.patch('/:id', validationUpdateTask,asyncHandler(updateTask))

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Delete task
 *     tags:
 *       - Tasks
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 1
 *
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *
 *       404:
 *         description: Task not found
 */

router.delete('/:id', asyncHandler(deleteTask))

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create new task
 *     tags:
 *       - Tasks
 *
 *     requestBody:
 *       required: true
 *
 *       content:
 *         application/json:
 *
 *           example:
 *             title: Learn Express
 *             description: Build Task API
 *
 *           schema:
 *             type: object
 *
 *             required:
 *               - title
 *               - description
 *
 *             properties:
 *
 *               title:
 *                 type: string
 *
 *               description:
 *                 type: string
 *
 *     responses:
 *
 *       201:
 *         description: Task created successfully
 *
 *       400:
 *         description: Validation Error
 */
router.post('/', validationTask,asyncHandler(createTask))




module.exports = router;