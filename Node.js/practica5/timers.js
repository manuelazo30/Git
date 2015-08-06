var sys = require('sys');
/*
En javasciprt del cliente forman parte del objeto window

Operan igual que en el navegador (igual que en chrome por )

Métodos::

.setTimeout
.setIntervalx
.clearTimeout
.clearInterval

*/



// ejemplo simple de timeout - espera dos segundos antes de continuar el siguiente paso
var start_time = new Date();
sys.puts("Inicia un timer de 2 segundos");

setTimeout(function()
	{
		var end_time = new Date();
		var difference = end_time.getTime() - start_time.getTime();
		sys.puts("Detener el timer después de " + Math.round(difference/1000) + " segundos");
		cleartimeout_ejemplo();
	}
, 2000);

// Hasta aquí se ha ejecutado la función que se pasa como primer parámetro a setTimeout y 2 segundos después se llama a la funciónclear timeout_ejempo()

//ejemplo de clearTimeout - timeout configurado en 30 segundos, se cancela de inmediato a través de clearTimeout, sin salida
function cleartimeout_ejemplo()
{
	var start_time = new Date();
	sys.puts("\nSe inicia timer de 30 segundos y lo detiene inmediatamente sin disparar una llamada");
	var timeout = setTimeout(function ()
		{
			var end_time = new Date();
			var difference = end_time.getTime() - start_time.getTime();
			sys.puts("Timer detenido después de " + Math.round(difference/1000) + " segundos");
		}, 30000)
	clearTimeout(timeout); // Limpiamos el setTimeout configurado antes
	interval_ejemplo(); // Llamamos a otra función
}

function interval_ejemplo()
{
	var start_time = new Date();
	sys.puts("n Se inicia un intervalo de 2 segundos, detenido después del quinto tick");
	var count = 1;
	var interval = setInterval(function()
		{
			if (count == 5)
				clearInterval(this);
			var end_time = new Date();
			var difference = end_time.getTime() - start_time.getTime();
			sys.puts("Tick número " + count + " después de " + Math.round(difference/1000) + " segundos");
			count++;
		}

	, 2000);
}
