/* sockets
Nos referimos a la comunicación entre dos partes (cliente - servidor o entre aplicaciones, etc)
Siempre hablamos de un método de comunicación (Siendo estricto, es el punto final de esa comunicación)
En Node.js son sockets de Internet.
Esta comunicación SIEMPRE significa la transferencia de datos.
Estos datos que fluyen entre los cokets son los llamados "Stream" que son transmitidos como datos binarios, en un buffer o en unicode (como un String normal y corriente)
Siempre se transmiten como PAQUETES
Un tipo especial de paquete llamado "Finish". Este paquete indica que ya no hay más paquetes que enviar y se cierra la conexión, por lo tanto.
*/