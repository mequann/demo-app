//import the employeeservice
const employeeService = require("../services/employee.services");
// A function to handdle the employee add
const addEmployee = async (req, res) => {
    console.log(req.body)
    //call the add employee service
    const employee = await employeeService.addEmployee(req.body);
    //check if the employee
    if (employee) {
        //response
        const response = {
          status: "success",
          message: "Employee added successfully",
          data: employee
        }
        // return response in json format
        res.status(200).json(response);
    } 
    else {
        //response
        const response = {
          status: "error",
          message: "Invalid credentials",
          data: null
        }
        // return response in json format
        res.status(403).json(response);
}
}
//export function addEmployee
module.exports = {
    addEmployee

};