const Conge = require('../models/conge.model.js');

// Fonctions du contrôleur
const ajouterConge = async (req, res) => {
  try {
    const {
      nom,
      prenom,
      email,
      type,
      raison,
      startDate,
      endDate,
      nbDeMoisAffecte,
      soldeConge,
      congesPrises,
      sanction,
      reste
    } = req.body;

    const nouveauConge = new Conge({
      nom,
      prenom,
      email,
      type,
      raison,
      startDate,
      endDate,
      nbDeMoisAffecte,
      soldeConge,
      congesPrises,
      sanction,
      reste
    });

    const congeEnregistre = await nouveauConge.save();
    res.json(congeEnregistre);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const obtenirConges = async (req, res) => {
  try {
    const conges = await Conge.find();
    res.json(conges);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { ajouterConge, obtenirConges };

