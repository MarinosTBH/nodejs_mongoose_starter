const express = require("express");
const router = express.Router();
const Rhs = require('../controllers/Rh.controller');
router.post('/rh', Rhs.create);
router.get('/rhs', Rhs.findAll);
router.get('/rhs/:RhId', Rhs.findOne);
router.put('/rhs/:RhId', Rhs.update);
router.delete('/rhs/:RhId', Rhs.delete);
module.exports = router;