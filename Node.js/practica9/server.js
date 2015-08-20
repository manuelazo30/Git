var http = require('http');
var path = require('path');
var fs = require('fs');
var mimeTypes = 
{
    '.js' : 'text/javascript; charset=utf-8',
    '.html' : 'text/html; charset=utf-8',
    '.css' : 'text/css; charset=utf-8'
}

var cache = {}; // Lo usaremos para almacenar nuestros archivos en memoria

function cacheYEntrega(f, cb) // Toma los mismos parámetros que fs.readFile (Que lee cuando tenemos que leer el almacenamiento del archivo
{
    fs.stat(f, function (err, stats)
    {
        var ultimoCambio = Date.parse(stats.ctime);
        var estaActualizado = (cache[f] && ultimoCambio > cache[f].timeStamp); // Esto devuelve true si cache[f] es true Y ultimoCambio es > que la hora de cafe[f]
        // var estaActualizado = 1;
        if (!cache[f] || estaActualizado) // No hay caché y están actualizados los ficheros y los cargo de disco
        {
            //console.log(cache[f].timeStamp);
            fs.readFile(f, function (err, data)
                {
                    console.log('Cargando ' + f + ' de disco duro');
                    if (!err)
                    {
                        cache[f] = { content: data, timestamp: Date.now() };
                    }
                    cb(err, data);
                }
            );
            return
        }
        console.log('Cargando ' + f + ' de cache');
        cb(null, cache[f].content);
    }
    );
}

http.createServer(function (request, response)
{
    var buscar = path.basename(decodeURI(request.url)) || 'index.html';
    //response.end(buscar);
    f = 'public/' + buscar;
    fs.exists(f, function (exists)
    {
        if (exists)
        {
            cacheYEntrega(f, function (err, data)
            {
                if (err)
                {
                    response.writeHead(500);
                    response.write('Error del Servidor');
                    //response.end(typeof data);
                    return;
                }

                var headers = { 'Content-Type': mimeTypes[path.extname(buscar)] };
                response.writeHead(200, headers);
                response.end(data);
            }
            );
            return;
        }
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end('Página no encontrada');
        //console.log(exists ? buscar + " SÍ EXISTE." : buscar + " NO EXISTE.");
    }
    );
}).listen(process.env.PORT || 8080);