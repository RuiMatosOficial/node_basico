var http = require('http')
    ,arquivo = require('fs');

var server = http.createServer(function(request,response){
    
    response.writeHead(200, {"Context-Type": "text/html"});
	if (request.url =='/'){
		arquivo.readFile('./arquivos/index.html', function(err, html){
			if (err) response.write('Arquivo index.html não encontrado.');
			response.write(html);
			response.end();
		});
	}else if(request.url == '/contatos'){
		arquivo.readFile('./arquivos/contatos.html', function(err, html){	
			if (err) response.write('Arquivo contatos.html nao encontrado.');
			response.write(html);
			response.end();
		});
	}else{
		response.write('Pagina nao encontrada.');
			response.end();
	}


});

server.listen(8080, function(){
	console.log('Servidor rodando! Port 8080');
	console.log(__dirname);
});