//função responsavel por criar task no DB


const connection = require('./connection.js');


const getAll = async ()=>{
   const tasks = await connection.execute(`SELECT * FROM tasks`);
   return tasks
}
const createTask = async (task)=>{
     const {title} = task
     const date = new Date(Date.now());
     const query = `INSERT INTO tasks(title,taskscol,status,created) VALUES (?,?,?,?) `
     const [createTask] = await connection.execute(query,[title,'pedente','pedente',date.toUTCString()])

    return createTask
}

const deletTask = async (id)=>{
     const removeTaks = await connection.execute('DELETE FROM tasks WHERE id = ?',[id]);
     return removeTaks
}
const updateTask = async (id, task) => {
    const { title, status } = task;

    if (title === undefined || status === undefined) {
        throw new Error('Title and status must be provided');
    }

    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    const updateTaks = await connection.execute(query, [title, status, id]);

    return updateTaks;
};


module.exports = {
    getAll,
    createTask,
    deletTask,
    updateTask
}