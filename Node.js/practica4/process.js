/*
Cada aplicación Node es una instancia de un Objeto Process, con sus funcionalidades preconstruidas.
La función del objeto Process es dar información sobre la aplicación y su entorno.
Los métodos más usados son:

	.execPath: Devuelve la ruta de ejecución de node
	.version: Devuelve la versión de Node
	.platform: Devuelve la plataforma del servidor
	.stdin: Se puede leer y escribir en él (asíncrono)
	.stdout: Se puede leer y escribir en él (asíncrono)
	.stderr: Es síncrono (de bloqueo)
	.memoryUsage: Nos dice cuánta memoria usa la aplicación node
	.nextTick: Para retrasar alguna función de forma ASÍNCRONA


console.log("Node se encuentra en " + process.execPath);
console.log("La versión de Node es " + process.version);
console.log("La arquitectura de Node que usamos es " + process.platform);

process.stdin.resume();
// resume hace que se inicie el stdin que está pausado por defecto
process.stdin.on('data', function (chunk)
	{
		process.stdout.write('Has escrito ' + chunk);
	}
);

console.log("RSS es: " + process.memoryUsage().rss);
console.log("heapTotal de V8 es: " + process.memoryUsage().heapTotal);
console.log("heapUsed de V8 es: " + process.memoryUsage().heapUsed);

console.log(process.memoryUsage());
*/

function asynchFunction = function(data, callback)
{
	process.nextTick(function(){
		callback(val);
	})
};