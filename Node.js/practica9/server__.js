var http = require('http');
var path = require('path');
// var buscar = path.basename(decodeURI(request, url));

var paginas = [
    {route: '/', output: 'Funcionando de escándalo'},
    {route: '/about/primera', output: 'Enrutamiento multinivel con Node'},
    {route: '/about/node', output: 'Tratamiento de Eventos I/O para Javascript V8'},
    {route: 'otra pagina', output: function () {return 'Estamos en ' + this.route;}},
];

    http.createServer(function (request, response)
    {

        // var buscar = path.basename(decodeURI(request.url)); // Aquí obtenemos todo lo que cuelga de la última / de la URL
        var buscar = decodeURI(request.url);
        //response.write('El decode de la URI es: ');

        //response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

        // Me hago un bucle para recorrerme todo el array páginas y comprobar si buscar se encuentra en el array para redireccionar

        paginas.forEach(function (pagina)
        {
            if (pagina.route == buscar)
            {
                response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                response.write('El decode de la URI es: ');
                response.write(buscar);
                response.write('<BR/><BR/>');
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
            response.write('El decode de la URI es: ');
            response.write(buscar);
            response.write('<BR/><BR/>');
            response.write('<img src= \'http://www.daiichimotors.com.pe/img/sexyimages/black/404.png\'>');
            response.end('Página no encontrada', 'utf8');
        }
    }).listen(process.env.PORT || 8080);