const express = require("express");
const router = express.Router();
const employee = require('../controllers/employe.controller');
router.post('/', employee.create);
router.get('/', employee.findAll);
router.get('/:employeeId', employee.findOne);
router.put('/:employeeId', employee.update);
router.delete('/:emplyeId', employee.delete);
module.exports = router;
