let nombreCliente = '';
const precioPrimera = 300;
const precioSegunda = 200;
let tipoTicket = '';
let primeraClase = false;
let segundaClase = false;
let contador = 0;
let cambio;
let cantidad;
let totalAPagar = 0;
let pagoCliente;

function saludar(nombres) {
	alert('Bienvenido a Airport  ' + nombres);
}

// function darCambio(pagos) {
// 	if ((primeraClase = true)) {
// 	}
// 	let cambio = pagos - precioPrimera;
// }

// modifique la función darCambio
const darCambio = (pagos) => pagos - totalAPagar;

nombreCliente = prompt(' Digite su nombre ');

function elegirtickts(tipo) {
	tipo = parseInt(prompt(`ELIJA UNA OPCION\n tiquete N° :\n\n 1-Primera clase \n 2-Segunda clase \n`));

	// tienes que cambiar la condición de And(&&) a Or(||) ya que la variable tipo de tiquete no puede tener el valor de 1 y 2 al mismo tiempo sino que tendrá el valor de 1 o 2 . También sino se cumple la condición debes volver a leer el valor para la variable tipo
	// while (tipo != 1 && tipo != 2) {} . isNaN es una función, devuelve true si el valor pasado como parámetro no es un valor númerico válido, devuelve false en caso contrario

	while (tipo < 1 || tipo > 2 || isNaN(tipo)) {
		tipo = parseInt(prompt(`ELIJA UNA OPCION\n tiquete N° :\n\n 1-Primera clase \n 2-Segunda clase \n`));
	}

	if (tipo == 1) {
		primeraClase = true;
		alert('Eligio primera');
		contador++;
		totalAPagar = totalAPagar + precioPrimera;
	} else if (tipo == 2) {
		segundaClase = true;
		alert('Eligio segunda');
		contador++;
		totalAPagar = totalAPagar + precioSegunda;
	}
}

saludar(nombreCliente);

cantidad = parseInt(prompt(' Cuantos tiquetes desea comprar'));
alert(`Precios :\n\n 1-Primera clase; ${precioPrimera}  \n 2-Segunda clase; ${precioSegunda} \n`);

for (let i = 0; i < cantidad; i++) {
	elegirtickts();
}

// la variable contador la puedes utilizar para contar cantidad de tickets vendidos
alert(`El total de sus tiquetes serian \n$ ${totalAPagar} (dolares )`);

pagoCliente = parseFloat(prompt(' Con que valor desea pagar moneda dolares'));

while (pagoCliente < totalAPagar) {
	alert('El valor debe ser mayor al precio total a pagar de los tiquetes.');
	pagoCliente = parseFloat(prompt(' Con que valor desea pagar moneda dolares'));
}

// puedes declarar la varible cambio como global(las variables globales se declaran arriba de todo por buenas prácticas) y luego asignarle el valor que devuelva la función darCambio ya que la creaste pero aun no la estás usando
// let cambio = pagoCliente - contador;

cambio = darCambio(pagoCliente);

alert(`Su cambio es ${cambio} gracias por elegir Airport`);
