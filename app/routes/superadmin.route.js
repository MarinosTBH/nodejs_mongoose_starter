
const express = require('express');
const app = express();
const router = express.Router();
const superAdminController = require('../controllers/superadmin.controller');

// Routes
router.post('/', superAdminController.createSuperAdmin);
router.get('/', superAdminController.getAllSuperAdmins);

module.exports = router;