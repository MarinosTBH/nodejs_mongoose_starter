const mongoose = require('mongoose');

// Define the employee schema
const employeeSchema = new mongoose.Schema({
  specialite: { type: String },
  projet: { type: String },
 });

const employeModel = mongoose.model('employee', employeeSchema);
module.exports = employeModel;