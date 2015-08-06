// cargar módulo http
var http = require('http');

// crear servidor server
http.createServer(function (req, res)
	{
		// contenido header
		res.writeHead(200, {'content-type': 'text/plain'});
		res.end("Hola\n");
	}
).listen(8124);

console.log("Servidor ejecutándose en puerto 8124");
