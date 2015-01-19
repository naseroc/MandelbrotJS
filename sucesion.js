/*

z_0 = 0

z_{n+1} = z_n + C


Como z_0 = 0 entonces 
z_1 = 0 + c 
z_1 = c --> z_n = c 
*/

/*

El Fractal de mandelbrot se define como el conjunto de todos los puntos C complejos tales que,
dada la regla de recursividad z_0 = 0  y z_{n+1} = z_n + C, ésta converge.

Algoritmo de tiempo de escape.

Para simplificar el cálculo de la convergencia consideraremos un número finito de iteraciones y además
 asumiremos que la secuencia diverge cuando hallamos algún z_n tal que |z_n| > 2, o lo que es equivalente

 |z_n|^2 > 4

Cada punto del plano de Agrant con un color dependiendo del número de iteraciones que se requirieron

 |z_n|^2 > 4

*/

function colores(x,maxIt){
	if(maxIt*0.8<x){ // Cuando la divergencia nunca se alcanza en la iteración, el color es negro.
		return '#000000';

	}
	if(maxIt*0.6<=x && x < maxIt*0.8){ //Entre el 
		return '#FFFFFF';
		
	}
	else if(maxIt*0.4<=x && x<maxIt*0.6){ //Cuando
		return '#E0E0E0';
		
	}
	else if(maxIt*0.2<=x && x<maxIt*0.4){ //Cuando
		return '#FF0000';
		
	}
	else if(x<maxIt*0.2){ //Cuando
		return '#CC0000';
		
	}
	else{
		return '#990000';
	}
}


function divergencia(p,q,max){
	var z0 = new Complex(0,0); // z_0
	var c = new Complex;
	c.x = p;
	c.y = q;
	var zn = new Complex;
	var zn = c //z_n
	var znM1 = new Complex; //z_{n+1}
	var count = 0; //Contador de iteraciones
	var maxIt = max; // Máximo de iteraciones

	for (var p = 0; p <= maxIt; p++) {
		if(zn.abs()>2){
			return colores(count,maxIt);
			break;
		}
		else if (p < maxIt){
			znM1 = (zn.mul(zn)).add(c);
			zn = znM1; 
			count = count + 1;
		}
		else{
			return colores(count,maxIt);
		}
	};
}


function pintar(iteraciones){
	canvas = document.getElementById('fractal');
	ctx = canvas.getContext('2d');
	for (var i = 0; i < 1000; i++){
		for (var j=0; j < 1000; j++) {
			ctx.fillStyle = divergencia(i/1000,j/1000,iteraciones); //Es una cuadrícula de 500x500 donde cada cuadrado es de 1x1 px
			//console.log(divergencia(i/250,j/250,6000))
			ctx.fillRect(i,j,1,1);
		}
	}
}










