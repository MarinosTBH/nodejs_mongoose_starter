const express = require("express");
const router = express.Router();
const employee = require('../controllers/employe.controller');
router.post('/employeees', employee.create);
router.get('/employeees', employee.findAll);
router.get('/employeees/:employeeId', employee.findOne);
router.put('/employeees/:employeeId', employee.update);
router.delete('/employeees/:emplyeId', employee.delete);
module.exports = router;