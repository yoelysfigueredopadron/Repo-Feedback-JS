// Es una buena práctica la varibles globales declararlas arriba de todo
let nombreGuardado = 'lucas';
let usuarioGuardado = 'lucasgmail.com';
let contraseniaGuardada = 'lucasaaaa';
let usuarioIngresado;
let contraseniaIngresada;

const datosIngreso = (usuario, contrasenia) => {
	if (usuario != usuarioGuardado && contrasenia != contraseniaGuardada) {
		alert('el usuario y la contraseña ingresada son incorrectos');
	} else if (usuario != usuarioGuardado) {
		alert('el usuario ingresado es incorrecto');
	} else if (contrasenia != contraseniaGuardada) {
		alert('la contraseña ingresada es incorrecta');
	} else {
		alert(`Bienvenido ${nombreGuardado}`);
	}
};

usuarioIngresado = prompt('ingrese nombre de usuario');
contraseniaIngresada = prompt('ingrese su contraseña');

datosIngreso(usuarioIngresado, contraseniaIngresada);

const confirmarArroba = (usuario) => {
	let arroba = false;

	// Si usuario es una cadena vacía o es null en caso que se presione cancelar en el prompt entonces no va a contener la @ por lo cual la
	// varible 'arroba' no sera true y devolverá el valor que le diste al inicio de la función o sea false
	if (usuario !== '' && usuario !== null) {
		for (let i = 0; i < usuario.length; i++) {
			if (usuario[i] === '@') {
				arroba = true;
			}
		}
	}

	return arroba;
};

// Lo que tenías hecho
// const cambioUsuario = (user) => {
// 	if (confirmarArroba(usuarioIngresado) === false) {
// 		usuarioIngresado = prompt('su usuario debe tener arroba, ingrese un nuevo usuario con arroba');
// 	}
// };

// Lo que puedes hacer
// caso 1 no estas usando el parámetro user por eso modifico (usuarioIngresado por user) dentro de la comparación en caso de que el usuario no tenga una @ solicitamos que vuelva a introducir el usuario
// const cambioUsuario = (user) => {
// 	if (confirmarArroba(user) === false) {
// 		usuarioIngresado = prompt('su usuario debe tener arroba, ingrese un nuevo usuario con arroba');
// 	}
// };

// Caso 2 si no vas a usar el parámetro user entonces lo puedes eliminar y utilizar siempre la variable global "usuarioIngresado" es buena práctica siempre que puedas evitar el uso de variables globales, eso evita error de lógica cuando las aplicaciones escalan y puede que modifiques el valor de una variable global por error en otra parte del código, luego te va a ser dificíl depurar para encontrar el error, ten en cuenta que estamos hablando de aplicaciones muchos más grande, la tuya está comenzando tener buenas prácticas desde un inicio siempre es lo mejor
const cambioUsuario = () => {
	if (confirmarArroba(usuarioIngresado) === false) {
		usuarioIngresado = prompt('su usuario debe tener arroba, ingrese un nuevo usuario con arroba');
	}
};

cambioUsuario(usuarioIngresado);

usuarioGuardado = usuarioIngresado;

const verificadorContrasenia = (contrasenia) => {
	// si la contraseña es distinto de una cadena vacía y contraseña es distinto de el valor null entonces podemos para a comprobar si la contraseña es menor de 8 caracteres porque si no hacemos la primera comprobación y el usuario presiona cancelar o presiona aceptar sin introducir un valor en la contraseña la propiedad lenght dará un error ya que una variable nula o vacía no tiene longitud en su interior y te mostrará el siguiente error en consola -> Uncaught TypeError: Cannot read properties of null (reading 'length')
	if (contrasenia !== '' && contrasenia !== null) {
		if (contrasenia.length < 8) {
			alert(`su contraseña es insegura`);
		}
	}
};

verificadorContrasenia(contraseniaIngresada);

const validoNumero = (contrasenia) => {
	let confirmoContrasenia = false;

	// Este caso ya esta explicado más arriba contraseña tiene que tener un valor para usar la propiedad length
	if (contrasenia !== '' && contrasenia !== null) {
		for (let i = 0; i < contrasenia.length; i++) {
			if (contrasenia[i].match(/[1234567890]/)) {
				confirmoContrasenia = true;
			}
		}
	}

	return confirmoContrasenia;
};

validoNumero(contraseniaIngresada);

const cambioContrasenia = (contrasenia) => {
	let pregunta = '';

	// se modifico contraseniaIngresada por contrasenia para usar este parámetro
	if (validoNumero(contrasenia) === false) {
		pregunta = prompt('Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?');
	}

	if (pregunta === 'si') {
		contraseniaIngresada = prompt('ingrese nueva contraseña');
	}
};

cambioContrasenia(contraseniaIngresada);

contraseniaGuardada = contraseniaIngresada;
