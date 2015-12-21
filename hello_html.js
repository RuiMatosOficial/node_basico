var http = require('http');

var server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<h1>Primeiro programa</h1>");
	response.write("<br />");
	response.write("<p>Primeiro paragrafo do meu sistema node.js</p>");
	response.end();

});

/************* Servidor  rodando**************/
/*
server.listen(8080);
console.log('Server na port localhost:8080'); */

/* ou */

server.listen(8080, function(){
	console.log('Servidor rodando na porta 8080');
});