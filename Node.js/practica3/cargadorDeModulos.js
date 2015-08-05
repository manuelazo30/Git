var repl = require('repl');
var context = repl.start({prompt: ">>"}).context;
// preload in modules
context.http = require('http');
context.util = require('util');
context.os = require('os');

console.log(context.os.hostname( ));
console.log(context.util.log('mensaje'));