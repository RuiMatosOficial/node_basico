var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<h1>Primeiro programa</h1>");
	response.write("<br />");
	response.write("<br />");
	response.write("<h2>Aulas Nodejs</h2>");
	
	var txt = arquivo.createWriteStream('./arquivos/logs.txt', {flags: 'a'});
	txt.write(request.url+'\n');
	response.end();
});

server.listen(8080, function(){
	console.log('Servidor rodando na porta 8080');
});