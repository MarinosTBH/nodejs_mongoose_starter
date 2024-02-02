const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
        Nom: { type: String, required: true },
        Prenom: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        role: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        number: { type: String },
        adresse: { type: String },
      },{timestamps:true});
const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;