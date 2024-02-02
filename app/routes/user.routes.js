const express = require("express");
const app = express();
const router = express.Router();
const users = require('../controllers/user.controller');
router.post('/', users.createUser);
router.get('/', users.getAllUsers);
router.get('/', users.getUserById);
router.put('/', users.updateUserById);
router.delete('/', users.deleteUserById);

module.exports = router;
