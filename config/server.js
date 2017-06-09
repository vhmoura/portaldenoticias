var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

// definindo as rotas numa tacada só
consign()
	.include('app/routes')
	.then('config/dbconnection.js') // incluir tudo e executa no final, por isso excluir server
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;
