const express = require('express');
const router = express.Router();
const Rhs = require('../controllers/Rh.controller');

// Route to create a new Rh
router.post('/', Rhs.createRh);

// Route to get all Rhs
router.get('/', Rhs.findAllRh);

// Route to get a specific Rh by ID
router.get('/', Rhs.findRhById);


// Route to update a specific Rh by ID
router.put('/', Rhs.updateRh);

// Route to delete a specific Rh by ID
router.delete('/', Rhs.deleteRh);

module.exports = router;