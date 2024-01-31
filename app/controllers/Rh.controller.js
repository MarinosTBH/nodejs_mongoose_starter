const Rh = require('../models/Rh.model.js');

// Create and Save a new Rh
exports.create = (req, res) => {
    // Validate request
    if(!req.body.username) {
        return res.status(400).send({
            message: "le contenu de Rh ne peut pas être vide"
        });
    }

    // Create a Rh
    const Rh = new Rh({
        username: req.body.username || "Untitled Rh", 
        email : req.body.email,
        password: req.body.password
    });

    // Save Rh in the database
    Rh.save()
    .then(data => {res.send(data);})
        .catch(err => {res.status(500).send({message: err.message || "Some error occurred while creating the Rh."});
    });
};

// Retrieve and return all Rh from the database.
exports.findAll = (req, res) => {
    Rh.find()
    .then(Rhs => {
        res.send(Rhs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Rhs."
        });
    });
};

// Find a single Rh with a RhId
exports.findOne = (req, res) => {
    Rh.findById(req.params.RhId)
    .then(Rh => {
        if(!Rh) {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });            
        }
        res.send(Rh);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Rh with id " + req.params.RhId
        });
    });
};

// Update a Rh identified by the RhId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.username) {
        return res.status(400).send({
            message: "Rh content can not be empty"
        });
    }

    // Find Rh and update it with the request body
    Rh.findByIdAndUpdate(req.params.RhId, {
        username: req.body.username || "Untitled Rh", 
        email : req.body.email,
        password: req.body.password
    }, {new: true})
    .then(Rh => {
        if(!Rh) {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        res.send(Rh);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });                
        }
        return res.status(500).send({
            message: "Error updating Rh with id " + req.params.RhId
        });
    });
};

// Delete a Rh with the specified RhId in the request
exports.delete = (req, res) => {
    Rh.findByIdAndRemove(req.params.RhId)
    .then(Rh => {
        if(!Rh) {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });
        }
        res.send({message: "Rh deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Rh not found with id " + req.params.RhId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Rh with id " + req.params.RhId
        });
    });
};
