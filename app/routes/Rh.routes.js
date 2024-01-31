module.exports = (app) => {
    const Rhs = require('../controllers/Rh.controller.js');


    app.post('/Rh', Rhs.create);

    
    app.get('/Rhs', Rhs.findAll);

   
    app.get('/Rhs/:RhId', Rhs.findOne);

    
    app.put('/Rhs/:RhId', Rhs.update);

    
    app.delete('/Rhs/:RhId', Rhs.delete);
}
