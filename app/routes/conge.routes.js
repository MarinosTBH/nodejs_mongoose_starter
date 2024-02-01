
const express = require('express');
const router = express.Router();
const congeController = require('../controllers/conge.controller');

// Routes
router.post('/ajouterconge', congeController.ajouterConge);
router.get('/obtenirconges', congeController.obtenirConges);

module.exports = router;
