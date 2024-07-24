//arquivo de conexão com db

const mysql =  require('mysql2/promise');
require('dotenv').config()

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_NAME,

});
connection.getConnection()
  .then(connection => {
    console.log('Database connection established.');
    connection.release();
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

module.exports = connection;