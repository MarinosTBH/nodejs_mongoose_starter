
const express = require('express');
const router = express.Router();
const congeController = require('../controllers/conge.controller');

// Routes
router.post('/', congeController.ajouterConge);
router.get('/', congeController.obtenirConges);

module.exports = router;
