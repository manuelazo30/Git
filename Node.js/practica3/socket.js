/*var repl = require("repl");
//repl.start("node personalizado> ", null, null, null, true); //
repl.start({prompt: "node personalizado> "}); // Ver help --> https://nodejs.org/api/repl.html
*/

var repl = require("repl");
var net = require("net");

repl.start({prompt: "node personalizado> "});

net.createServer(function (socket)
	{
		repl.start("node via TCP socket> ", socket);
	}
).listen(8124);

// Aquí puedo abrirme un telnet (Con putty por ejemplo)