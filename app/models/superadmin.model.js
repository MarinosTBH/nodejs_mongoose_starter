const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },

});

const SuperAdminModel = mongoose.model('SuperAdmin', superAdminSchema);

module.exports = SuperAdminModel;
