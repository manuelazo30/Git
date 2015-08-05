/* Global es similar al objeto window de Javascript del lado del cliente.
La diferencia es que window es global por naturaleza, en Node las variables son locales

console.log(global);


var test = "esto no es global realmente, aunque lo llamemos así";
console.log(test);
console.log(global);

gl = global;
console.log(gl.test);
*/

var valorGlobal;

exports.setGlobal = function(val)
{
	valorGlobal = val;
}

exports.returnGlobal = function()
{
	console.log(global);
	return valorGlobal;
}
