const mongoose = require('mongoose');

const congeSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: String, required: true },
  raison: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  nbDeMoisAffecte: { type: Number },
  soldeConge: { type: Number },
  congesPrises: { type: Number },
  sanction: { type: String },
  reste: { type: Number },
});

const Conge = mongoose.model('Conge', congeSchema);

module.exports = Conge;

