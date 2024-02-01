const express = require("express");
const router = express.Router();
const users = require('../controllers/user.controller');
router.post('/employees', employe.create);
router.get('/employees', employe.findAll);
router.get('/employees/:employeId', employe.findOne);
router.put('/employees/:employeId', employe.update);
router.delete('/employees/:emplyeId', employe.delete);
module.exports = router;