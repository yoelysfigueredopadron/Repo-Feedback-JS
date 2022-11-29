let usuarioConEmail = 'azs';
const contrasenia = 'hola';

const nombre = prompt('Ingrse su nombre');
let usuario = prompt('Ingrse su usuario');
let contra = prompt('Ingrese su contraseña');
let loguin = false;
let tieneArroba = false;

function validacionDeDatos() {
	if (usuarioConEmail != usuario && contrasenia != contra) {
		alert('Su usuario y contraseña son erroneos');
	} else if (usuarioConEmail != usuario) {
		alert('Su usuario es incorrecto');
	} else if (contrasenia != contra) {
		alert('Su contraseña es erronea');
	} else loguin = true;
}

validacionDeDatos();

function saludarAlosUsuarios(nombre) {
	if (loguin === true) {
		alert(`Bienvenido ${nombre}`);
	}
}

saludarAlosUsuarios(nombre);

function validarArroba() {
	if (loguin === true) {
		console.log(usuario);
		for (let i = 0; i < usuario.length; i++) {
			if (usuario[i] === '@') {
				tieneArroba = true;
			}
		}
		if (tieneArroba != true) {
			usuarioConEmail = prompt('Ingrese nuevo email');
		}
	}
}

validarArroba();

function validarContraMenor() {
	if (loguin === true) {
		let acc = 0;
		for (let i = 0; i < contra.lenght; i++) {
			acc++;
		}
		if (acc <= 8) {
			alert('Su contraseña es insegura');
		}
	}
}

validarContraMenor();

function validarContraNumerica() {
	if (loguin === true) {
		let acc1 = 0;
		let contra1;
		for (let i = 0; i < contra.lenght; i++) {
			if (contra[i].match(/[0123456789]/)) {
				acc1++;
			}
		}
		if (acc1 === 0) {
			contra1 = prompt('Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?');
			if (contra1.toLowerCase() === 'si') {
				contra = prompt('Ingrese su nueva contraseña');
			}
		}
		console.log(contra);
	}
}

validarContraNumerica();
