// Import the connection file
const connection = require("../config/db.config");

// A function to handle employee addition
const addEmployee = async (employeeData) => {
    try {
        // Query to add an employee with parameterized values
        const query = "INSERT INTO employee_test (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";

        // Execute the query with the actual values passed as an array
        const result = await connection.executeQuery(query, [
            employeeData.firstName,
            employeeData.lastName,
            employeeData.email,
            employeeData.password
        ]);

        // Check if the result has an insertId, indicating a successful insertion
        if (result.insertId) {
            const insertedId = result.insertId;
            return insertedId;
        } else {
            return null;
        }
    } catch (error) {
        // Handle errors
        console.log(error);
        return null;
    }
};

// Export the addEmployee function
module.exports = {
    addEmployee
};