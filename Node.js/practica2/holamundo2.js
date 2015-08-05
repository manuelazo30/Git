var qs = require('querystring');
console.log(qs);
/*{
	unescapeBuffer: [Function],
	unescape: [Function],
	escape: [Function],
	encode: [Function],
	sstringify: [Function],
	decode: [Function],
	parse: [Function],
}*/
val = qs.parse('file=primario&file=secuendario&test=one').file;
console.log(val);
val = qs.parse('file=primario&file=secuendario&test=one').test;
console.log(val);

var test = function (x,y) {

	var val = x*y;
	return val;

}

console.log(test(5,3));