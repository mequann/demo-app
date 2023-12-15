const express = require("express");
// const mysql = require("mysql2");
const cors = require("cors");
const app = express();
//import dotenv module and call the config() method
require("dotenv").config(); 

//import the login route
const loginRoutes = require("./routes/login.routes");
//import the employees route
 const employeesRoutes = require("./routes/add-employees.routes");

//get the port from the environment varaible
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//add the login router to the middle ware chain
app.use(loginRoutes);
//add the employeeRoute
app.use(employeesRoutes);
//allow all CORS
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//   );
//   next();
// })

//create data connection
// const connection = mysql.createConnection(dataconfig);
//connect   
// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("connected to database");
// })

//create simple get request handle to send back 
app.get("/", (req, res) => {
    res.send("Hello World!");
});
//post request to add new employee to the database
// app.post("/add-employee", (req, res) => {    
//     const{firstname,lastname,email,password}= req.body;
//     // console.log(req.body)
//     const query = `INSERT INTO employee_test (firstName, lastName ,email, password) VALUES ('${firstname}','${lastname}', '${email}', '${password}')`;
//     connection.query(query, (err, result) => {
//       if (err) {        
//         console.log(err);
//       }
//       //response object
//       const response = {
//         status: "success",
//         message: "Employee added successfully",
//         data: result
//       }
//       // return response in json format
//       res.status(200).json(response);
    
// })
// })
//write post request for login the employee
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body)
//   const query = `SELECT * FROM employee_test WHERE email = '${email}' AND password = '${password}'`;
//   connection.query(query, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
    
//     //check if the result is empty or not
//     if (result.length>0) {

// //response object
//     const response = {
//       status: "success",
//       message: "Employee logged in successfully",
//       data: result
//     } 
//       // return response in json format
//       res.status(200).json(response);
//     }
  
//     else {

//       const response = {
//         status: "error",
//         message: "Invalid credentials",
//         data: result
//       }
//       // return response in json format
//       res.status(200).json(response);
//     }
      
//   })
// })
//start server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
}); 

