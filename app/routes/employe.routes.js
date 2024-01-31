module.exports = (app) => {
const employees = require('../controllers/user.controller.js');


app.post('/employees', employees.create);


app.get('/employees', employees.findAll);


app.get('/employees/:userId', employees.findOne);


app.put('/employees/:employeeId', employees.update);


app.delete('/employees/:employeeId', employees.delete);
}