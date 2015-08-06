var net = require('net');

// conn es una instancia de un socket
var server = net.createServer( function(conn)
	{
		console.log('Conectadooooooo');

		/*
			El evento on reciboe como primer parámetro el nombre del evento y como segundo qué hacer cuando se produce ese evento (función listener)
		*/
		conn.on('data', function (data)
			{
				console.log(data + ' desde ' + conn.remoteAddress + ' y el puerto remoto es ' + conn.remotePort);
				conn.write('Repitiendo: ' + data + ' y dos huevos duros');
			}
		);

		conn.on('close', function()
			{
				console.log('Cliente cerró conexión');
			}
		);
	}
).listen(8124);

console.log("Servidor ejecutándose en puerto 8124");