var http = require('http');

var server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
     // Estarei escrevendo sem acentos devido a configuração de utf-8 mais adiante estarei adicionando.
	if (request.url == '/'){
		response.write("<h1>Pagina principal</h1>");
	}
	else if(request.url =='/contato'){
		response.write("<h1>Pagina de contato</h1>");
	}
	else if(request.url =='/cliente'){
		response.write("<h1>Pagina de clientes</h1>");
	}
	else if(request.url =='/cliente/nome'){
		response.write("<h1>Clientes: Thiago</h1>");
	}
	else{
		response.write("<h1>Pagina nao encontrada.</h1>")
	}

	response.end();
	

});

server.listen(8080, function(){
	console.log(' Servidor rodando na porta 8080');
});