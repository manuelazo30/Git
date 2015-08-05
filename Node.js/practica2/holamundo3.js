var miFruta = function(frutaArray, eligeUna){
	if (eligeUna <= 0 || eligeUna > frutaArray.length)
		return 'Número inválido';
	else
		return frutaArray[eligeUna - 1];
}

fruta = ['manzana','pera','naranja','ciruela','fresa'];
console.log(miFruta(fruta,2));
console.log(miFruta(fruta,1));
console.log(miFruta(fruta,5));
console.log(miFruta(fruta,6));
console.log(miFruta(fruta,-5));
console.log()