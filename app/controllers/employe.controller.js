const employee = require('../models/employe.model.js');

// Create and Save a new employee
exports.create = (req, res) => {
    // Validate request
    if(!req.body.username) {
        return res.status(400).send({
            message: "user content can not be empty"
        });
    }

    // Create a employe
    const user = new employee({
        specialite:req.body.specialite,
        projet:req.body.projet,
    });

    // Save employee in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the employee."
        });
    });
};

// Retrieve and return all employees from the database.
exports.findAll = (req, res) => {
    employee.find()
    .then(employees => {
        res.send(employees);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving employees."
        });
    });
};

// Find a single employee with a employeeId
exports.findOne = (req, res) => {
    employee.findById(req.params.employeeId)
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "employee not found with id " + req.params.employeeId
            });            
        }
        res.send(employee);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "employee not found with id " + req.params.employeeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.employeeId
        });
    });
};

// Update a employee identified by the employee Id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.username) {
        return res.status(400).send({
            message: "employee content can not be empty"
        });
    }

    // Find employee and update it with the request body
    employee.findByIdAndUpdate(req.params.employeId, {
        specialite:req.body.specialite,
        projet:req.body.projet,
    }, {new: true})
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "employee not found with id " + req.params.employeeId
            });
        }
        res.send(employee);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "employee not found with id " + req.params.employeeId
            });                
        }
        return res.status(500).send({
            message: "Error updating employee with id " + req.params.employeeId
        });
    });
};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
