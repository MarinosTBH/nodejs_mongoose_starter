
const express = require('express');
const app = express();
const router = express.Router();
const congeController = require('../controllers/conge.controller');

// Routes:
// Route to add a new congé
router.post('/', congeController.ajouterConge);

// Route to get all congés
router.get('/', congeController.obtenirConges);

// Route to get a specific congé by ID
router.get('/', congeController.obtenirCongeParId);

// Route to update a specific congé by ID
router.put('/', congeController.mettreAJourCongeParId);

// Route to delete a specific congé by ID
router.delete('/', congeController.supprimerCongeParId);


module.exports = router;
