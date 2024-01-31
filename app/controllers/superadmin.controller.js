// superAdminController
const SuperAdmin = require('../models/superadmin.model.js');

// Controller functions
const createSuperAdmin = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const superAdmin = new SuperAdmin({ username, password, email });
    const savedSuperAdmin = await superAdmin.save();
    res.json(savedSuperAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllSuperAdmins = async (req, res) => {
  try {
    const superAdmins = await SuperAdmin.find();
    res.json(superAdmins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createSuperAdmin, getAllSuperAdmins };
