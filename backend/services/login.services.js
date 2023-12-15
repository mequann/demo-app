//import the database connection file
const connection = require("../config/db.config");
//a function to handle the login request 
const login = async (employeeData) => {
    //try catch block
    try {
        console.log('inside login service')
        console.log(employeeData)
        //query to select the employee details from the database
        const query = `SELECT * FROM employee_test WHERE email = '${employeeData.email}' AND password = '${employeeData.password}'`;
         // Execute the query
         const result = await connection.executeQuery(query, [employeeData.email, employeeData.password]);
        console.log(result)
        //if the query return result return it otherwise return null
        if (result.length>0) {
            return result
        }   
        else {
            return null

        }    
}
    catch (error) {
        console.log(error)
    }
}
        
//export the function
module.exports = {
    login,
};

