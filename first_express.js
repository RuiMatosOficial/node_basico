/* 
Para funcionar é necessário instalar o express

Centos e Fedora
  npm install express
  Lembrando que está sendo usada o node -version 4.2.3

Primeiro programa feito em express
*/
var express = require('express');
var app = express();

app.get('/', function(rep, res){
	res.send('Hello Word!');
});

var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Rodando no http://%s:%s', host, port);
});