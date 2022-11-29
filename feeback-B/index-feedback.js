// Base de datos para registrar usuarios

let siTiene = false;
let siContiene = false;
let siTieneOcho = false;
const LENGTH_PASSWORD = 8;

let nick = prompt('Ingrese su usuario');
let newPassword = prompt('Ingrese su password');
let ingreseSuMail = prompt('Ingrese su email');

// He visto que en las condiciones usas el signo de = para comparar pero ese es el operador de asignación
// si quieres comparar si dos valores son iguales tienes que usar el operador de comparación de igualdad se escribe asi ==
function arroba() {
	while (!siContiene) {
		if (ingreseSuMail.match(/[@]/)) {
			siContiene = true;
			break;
		} else {
			alert('Su email debe tener arroba');
			ingreseSuMail = prompt('Ingrese su email');
		}
	}
}

// siTiene == true -> esta condición inicialmente es falsa por lo tanto no se cumple y el código dentro del while no se ejecuta si quieres verificar si newPassword contiene numeros deberias de cambiar la condicón a !siTiene -> esto devuelve true porque siTiene le asignaste false inicialmente
// El signo de exclamación hacia abajo es el operador de negación lógico por lo que si algo es true devuelve false y viceversa
function number() {
	while (!siTiene) {
		if (newPassword.match(/[123456789]/)) {
			siTiene = true;
			break;
		} else {
			alert('Su password debe tener caracteres alfanumericos');
			newPassword = prompt('Ingrese su password');
		}
	}
}

// password no fue declarado como variable o constate, entiendo que con password.length quieres hacer referencia a que el newPassword no puede ser menor que la longitud que tu deseas para el password y por la variable de tipo boolean "siTieneOcho" entiendo que el valor de longitud que deseas es 8 además de que es una de las características de los password seguros, bueno en tal caso voy a crear una constantes LENGTH_PASSWORD = 8 arriba de todo al inicio del archivo para luego usarla donde tenias password.length

// NOTA: Las constantes pueden ser declaradas en mayusculas o minusculas pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas
function passwordCaracteres() {
	while (!siTieneOcho) {
		if (newPassword.length < LENGTH_PASSWORD) {
			alert('Pasword ingresada debe tener mas de ocho caracteres');
			newPassword = prompt('Ingrese su password');
		} else {
			siTiene = true;
			alert(`Bienvenido usuario ${nick}, su email : ${ingreseSuMail} y password fueron registrados correctamente, gracias!`);
			break;
		}
	}
}

number();

arroba();

passwordCaracteres();
