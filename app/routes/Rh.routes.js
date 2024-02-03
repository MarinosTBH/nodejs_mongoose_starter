const express = require("express");
const router = express.Router();
const Rhs = require('../controllers/Rh.controller');
router.post('/', Rhs.create);
router.get('/', Rhs.findAll);
router.get('/:RhId', Rhs.findOne);
router.put('/:RhId', Rhs.update);
router.delete('/:RhId', Rhs.delete);
module.exports = router;
