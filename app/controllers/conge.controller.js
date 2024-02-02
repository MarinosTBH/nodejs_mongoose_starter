const Conge = require('../models/conge.model.js');

// Controller functions
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

const obtenirCongeParId = async (req, res) => {
  try {
    const conge = await Conge.findById(req.params.id);
    if (!conge) {
      return res.status(404).json({ error: 'Congé non trouvé' });
    }
    res.json(conge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const mettreAJourCongeParId = async (req, res) => {
  try {
    const conge = await Conge.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!conge) {
      return res.status(404).json({ error: 'Congé non trouvé' });
    }
    res.json(conge);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const supprimerCongeParId = async (req, res) => {
  try {
    const conge = await Conge.findByIdAndDelete(req.params.id);
    if (!conge) {
      return res.status(404).json({ error: 'Congé non trouvé' });
    }
    res.json({ message: 'Congé supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  ajouterConge,
  obtenirConges,
  obtenirCongeParId,
  mettreAJourCongeParId,
  supprimerCongeParId
};



