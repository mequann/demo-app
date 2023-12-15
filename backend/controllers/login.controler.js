//require the loginservice
const loginService = require("../services/login.services");

// write an asynch function to handle login request
const login = async (req, res,next) => {
    console.log(req.body)
    //call the login service
    const employee = await loginService.login(req.body);
    //check if the employee
    if (employee) {
//response
        const response = {
          status: "success",
          message: "Employee logged in successfully",
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
//export the function
module.exports = {
  login,
};