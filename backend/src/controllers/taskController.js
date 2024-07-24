const taskModel = require('../models/taskModels');

const getAll = async (req, res) => {
    try {
        const tasks = await taskModel.getAll();
        return res.status(200).json(tasks[0]);
    } catch (error) {
        console.error('Controller: Error fetching tasks:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await taskModel.createTask(req.body);
        return res.status(201).json(task);
    } catch (error) {
        console.error('Controller: Error in createTask:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleTaks = async (req,res) =>{
    const {id} = req.params;
    await taskModel.deletTask(id)
    return res.status(204).json()
}

const updateTaks = async(req,res) =>{
    const {id} = req.params

    await taskModel.updateTask(id,req.body)
    return res.status(204).json()
}

module.exports = {
    getAll,
    createTask,
    deleTaks,
    updateTaks
};
