var http = require('http');
var path = require('path');
// var buscar = path.basename(decodeURI(request, url));

var paginas = [
    {route: '', output: 'Funcionando de escándalo'},
    {route: 'about', output: 'Un ejemplo de enrutamiento con Node'},
    {route: 'otra pagina', output: function () {return 'Estamos en ' + this.route;}},
];

    http.createServer(function (request, response)
    {

        var buscar = path.basename(decodeURI(request.url)); // Aquí obtenemos todo lo que cuelga de la última / de la URL
        response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        
        // Me hago un bucle para recorrerme todo el array páginas y comprobar si buscar se encuentra en el array para redireccionar

        paginas.forEach(function (pagina)
        {
            if (pagina.route == buscar)
            {
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                response.end(typeof (pagina.output) === 'function' ? pagina.output() : pagina.output);
                /*
                Esto es lo mismo que:
                if (typeof pagina.output === 'function') -- Si pagina.output es una función (typeof devuelve una cadena con el tipo de operando sin evaluarlo)
                {
                pagina.output();
                }
                else
                {
                pagina.output;
                }
                */
            }
        }
	)

        if (!response.finished)
        {
            response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            response.end('Página no encontrada', 'utf8');
        }
    }).listen(process.env.PORT || 8080);