const express = require("express");
const app = express();
const router = express.Router();
const employee = require('../controllers/employe.controller');
// Routes
router.post('/', employee.createEmployee);
router.get('/', employee.getAllEmployees);
router.get('/', employee.getEmployeeById);
router.put('/', employee.updateEmployeeById);
router.delete('/', employee.deleteEmployeeById);
module.exports = router;