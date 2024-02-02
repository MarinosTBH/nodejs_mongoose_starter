const Rh = require('../models/Rh.model.js');

// Controller functions
const createRh = async (req, res) => {
    try {
        // Validate request
        if (!req.body.username) {
            return res.status(400).send({
                message: "le contenu Rh ne peut pas être vide"
            });
        }

        // Create a Rh
        const newRh = new Rh({
            username: req.body.username || "Untitled Rh",
            email: req.body.email,
            password: req.body.password
        });

        // Save Rh in the database
        const savedRh = await newRh.save();
        res.send(savedRh);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Rh."
        });
    }
};

// Retrieve and return all Rh from the database.
const findAllRh = async (req, res) => {
    try {
        const Rhs = await Rh.find();
        res.send(Rhs);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving Rhs."
        });
    }
};

// Find a single Rh with a RhId
const findRhById = async (req, res) => {
    try {
        const Rh = await Rh.findById(req.params.RhId);
        if (!Rh) {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        res.send(Rh);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        return res.status(500).send({
            message: "Error retrieving Rh with id " + req.params.RhId
        });
    }
};

// Update a Rh identified by the RhId in the request
const updateRh = async (req, res) => {
    try {
        // Validate Request
        if (!req.body.username) {
            return res.status(400).send({
                message: "Rh content can not be empty"
            });
        }

        // Find Rh and update it with the request body
        const updatedRh = await Rh.findByIdAndUpdate(req.params.RhId, {
            username: req.body.username || "Untitled Rh",
            email: req.body.email,
            password: req.body.password
        }, { new: true });
        if (!updatedRh) {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        res.send(updatedRh);
    } catch (error) {
        if (error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        return res.status(500).send({
            message: "Error updating Rh with id " + req.params.RhId
        });
    }
};

// Delete a Rh with the specified RhId in the request
const deleteRh = async (req, res) => {
    try {
        const deletedRh = await Rh.findByIdAndRemove(req.params.RhId);
        if (!deletedRh) {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        res.send({ message: "Rh deleted successfully!" });
    } catch (error) {
        if (error.kind === 'ObjectId' || error.name === 'NotFound') {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        return res.status(500).send({
            message: "Could not delete Rh with id " + req.params.RhId
        });
    }
};

module.exports = {
    createRh,
    findAllRh,
    findRhById,
    updateRh,
    deleteRh
};
