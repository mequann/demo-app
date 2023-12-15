
// require('dotenv').config()
const mysql = require("mysql2/promise");
const dataconfig={
host:process.env. DB_host,
user: process.env.DB_user,
password:process.env. DB_passwor,
database: process.env.DB_Name,
connectionLimit: 10,
}
//create data connection pool
       //single connection can handdle upto 80,000 request/s
const pool = mysql.createPool(dataconfig);
// create an asynch function to excute the sql quiries
// Create an asynchronous function to execute SQL queries with name query ,and parametrs sql and params
const executeQuery = async (sql, params) => {
//   const connection = await pool.getConnection();
  const [rows] = await pool.execute(sql, params);
//   connection.release();
  return rows;
}
//export the query method for running sql queries on other files
module.exports = {
  executeQuery ,
  
};
