// Crearemos variables y constantes arriba de todo por buenas prácticas. Las constantes 'compraVenta' y 'montoIngresado' la vamos a crear como variables con la palabra reservada let porque son variables que pueden cambiar y al estar declaradas como constantes una vez el usuario asigne un valor por error no se puede modificar.
const dolarUsCompra = 164;
const dolarUsVenta = 172;
let compraVenta, montoIngresado;

alert(`¡Hola y bienvenido(a) a United Exchange! \r\r Dolar oficial hoy: \r Compra: $${dolarUsCompra} \r Venta: $${dolarUsVenta}`);

compraVenta = prompt('¿Usted quiere comprar o vender dolares?');

// vamos a validar que el usuario introduzca la cadena 'comprar' o 'vender' en caso contrario la aplicación no lo dejará avanzar
while (compraVenta === '' || compraVenta === null || compraVenta !== 'comprar' || compraVenta !== 'vender') {
	if (compraVenta === 'comprar' || compraVenta === 'vender') {
		alert(`Va a ${compraVenta} dolares.`);
		break;
	} else {
		if (compraVenta === '') {
			// le asignamos un valor para que el usuario vea que no escribio nada
			compraVenta = 'cadena de texto vacía';
		}
		alert(`:( Error, ha introducido la acción incorrecta con la palabra -> \'${compraVenta}\', escriba \"comprar\" o \"vender\" según la operación que desee realizar.`);
		compraVenta = prompt('¿Usted quiere comprar o vender dolares?');
	}
}

montoIngresado = Number(prompt(`Ingrese el monto que usted quiere ${compraVenta}`));

// valida que se introduzca un número válido
while (montoIngresado < 0 || isNaN(montoIngresado)) {
	alert(`El monto ingresado (${montoIngresado}) no es un valor válido, debe ingresar un número superior a 0 para ${compraVenta}. También puede introducir 0 si no desea realizar la operación.`);

	montoIngresado = Number(prompt(`Ingrese el monto que usted quiere ${compraVenta}`));
}

function cotizardor(compraVenta, montoIngresado) {
	if (compraVenta.toLocaleLowerCase() === 'vender' && montoIngresado >= 0) {
		return 'El total a recibir es: $' + montoIngresado * dolarUsCompra + ' pesos argentinos';
	} else if (compraVenta.toLocaleLowerCase() === 'comprar' && montoIngresado >= 0) {
		return 'El total a pager es: $' + montoIngresado * dolarUsVenta + ' pesos argentinos';
	} else {
		return 'Error: Por favor, ingrese un valor válido';
	}
}

// si monto ingresado es igual a cero es porque se cancelo la operación
if (montoIngresado == 0) {
	alert(`Usted ha decidido cancelar la operación de ${compraVenta}.`);
} else {
	console.log(cotizardor(compraVenta, montoIngresado));
}
