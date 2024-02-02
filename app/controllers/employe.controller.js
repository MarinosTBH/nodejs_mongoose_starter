const Employee = require('../models/employe.model.js');

// Create and Save a new employee
const createEmployee = async (req, res) => {
    // Validate request
    if (!req.body.username) {
        return res.status(400).send({
            message: "username cannot be empty"
        });
    }

    try {
        // Create an employee
        const newEmployee = new Employee({
            specialite: req.body.specialite,
            projet: req.body.projet,
        });

        // Save employee in the database
        const savedEmployee = await newEmployee.save();
        res.send(savedEmployee);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the employee."
        });
    }
};

// Retrieve and return all employees from the database.
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.send(employees);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving employees."
        });
    }
};

// Find a single employee with a employeeId
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
        }
        res.send(employee);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
        }
        return res.status(500).send({
            message: "Error retrieving employee with id " + req.params.employeeId
        });
    }
};

// Update a employee identified by the employee Id in the request
const updateEmployeeById = async (req, res) => {
    // Validate Request
    if (!req.body.username) {
        return res.status(400).send({
            message: "username cannot be empty"
        });
    }

    try {
        // Find employee and update it with the request body
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.employeeId, {
            specialite: req.body.specialite,
            projet: req.body.projet,
        }, { new: true });
        if (!updatedEmployee) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
        }
        res.send(updatedEmployee);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
        }
        return res.status(500).send({
            message: "Error updating employee with id " + req.params.employeeId
        });
    }
};

// Delete a user with the specified userId in the request
const deleteEmployeeById = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndRemove(req.params.employeeId);
        if (!deletedEmployee) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
        }
        res.send({ message: "Employee deleted successfully!" });
    } catch (error) {
        if (error.kind === 'ObjectId' || error.name === 'NotFound') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
        }
        return res.status(500).send({
            message: "Could not delete employee with id " + req.params.employeeId
        });
    }
};
module.exports = {createEmployee,getAllEmployees,getEmployeeById,updateEmployeeById,deleteEmployeeById};