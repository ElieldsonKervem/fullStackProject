const express = require('express');
const  taskController  = require('../controllers/taskController');
const router =  express.Router();
const validateBody = require('../middlewares/tasksMiddlewares')

 // remove this after you've confirmed it is working

router.get('/tasks',taskController.getAll)
router.post('/tasks',validateBody.validateBody,taskController.createTask)
router.delete('/tasks/:id',taskController.deleTaks)
router.put('/tasks/:id',taskController.updateTaks)

module.exports = router;

