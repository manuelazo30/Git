var http = require('http');
var path = require('path');
var fs = require('fs');
var mimeTypes = 
{
    '.js' : 'text/javascript; charset=utf-8',
    '.html' : 'text/html; charset=utf-8',
    '.css' : 'text/css; charset=utf-8'
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
            fs.readFile(f, function (err, data)
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