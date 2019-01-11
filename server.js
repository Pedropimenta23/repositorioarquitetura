var express = require('express');
var app = express();
var porta = process.env.PORT || 5000;
var mongoose = require('mongoose');
var ClientModel = require('./models/clientModel');
var CarModel = require('./models/carModel');
var OccupationModel = require('./models/occupationModel');
var PSpaceModel = require('./models/pSpaceModel');
var StreetModel = require('./models/streetModel');
var ZoneModel = require('./models/zoneModel');

//instanciar o modelo de dados definido
bodyParser = require('body-parser');
// configuracao do modelo em mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/parkingDB');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//importar rotas
var routes = require('./routes/pSpaceRoutes'); 
routes(app);  
var routes1 = require('./routes/occupationRoutes'); 
routes1(app);  
var routes2 = require('./routes/clientRoutes'); 
routes2(app);  
var routes3 = require('./routes/carRoutes'); 
routes3(app);  
var routes4 = require('./routes/zoneRoutes'); 
routes4(app); 
var routes5 = require('./routes/streetRoutes'); 
routes5(app); 
app.listen(porta);

console.log('inscricoes RESTful API a executar em:' + porta);
