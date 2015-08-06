/* Es un modo de manejar datos binarios en Node (Strings de Server y Sockets)
Los Strings, a veces, son datos binarios en lugar de Strings

Para crear un buffer desde un String, crearemos un buffer y un segundo parámetro opcional con la codificación.
Las codificaciones posibles son:

ascii
utf8
usc2 (Unicode)
base64
hex

Podemos también escribir un string a un buffer ya existente, dando un offset (tamaño ) y una codificación.

Métodos para leer y escribir el buffer:

buffer.readint8
buffer.writeint8

*/