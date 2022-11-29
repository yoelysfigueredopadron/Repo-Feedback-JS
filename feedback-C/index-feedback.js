// pienso que la variable usuarioConEmail  debería de tener un mail en su valor ejemplo azs@gmail.com
let usuarioConEmail = 'azs@gmail.com';

// veo que contrasenia es una constante que no cambia su valor a la cual le asignas un valor como es el caso de "nombre" en este caso por buenas prácticas deberías escribir el nombre de la misma en mayuscula así se puede diferenciar a simple vista del resto de variables. ejemplo CONTRASENIA
const contrasenia = 'hola';

const nombre = prompt('Ingrse su nombre');
let usuario = prompt('Ingrse su usuario');
// Como buena práctica es mejor siempre usar nombres descriptivos por ejemplo cambiaría contra por uno de los siguientes nombres (contraseniaEntrada, contraseniaIngresada, contraseniaUsuario) También puedes usar nombres en ingles como (password, passwordUser, etc) pero por una cuestión de consistencia entonces deberías de usar todos los nombres en ingles(contantes, variables, funciones, etc) es una cuestión de elección y gustos, a menos que trabajes en un equipo de desarrollo donde tienes que seguir los acuerdos sobre las nomenclaturas a utilizar.
let contra = prompt('Ingrese su contraseña');
let loguin = false;
let tieneArroba = false;

function validacionDeDatos() {
	// Tienes que cambiar el operador lógico(And) && por (Or)|| ya que no es obligatorio que se cumplan ambas condiciones con solo una que devuelva false la condición compuesta de estas dos expreciones debería devolver false y evaluar la próxima condición ejemplo: (usuarioConEmail != usuario && contrasenia != contra)  cambiar a (usuarioConEmail != usuario || contrasenia != contra)
	if (usuarioConEmail != usuario || contrasenia != contra) {
		alert('Su usuario y contraseña son erroneos');
	} else if (usuarioConEmail != usuario) {
		alert('Su usuario es incorrecto');
	} else if (contrasenia != contra) {
		alert('Su contraseña es erronea');
	} else loguin = true;
}

validacionDeDatos();

function saludarAlosUsuarios(nombre) {
	// if (loguin === true) {
	//     alert(`Bienvenido ${nombre}`);
	// }

	// si nombre no es una cadena vacía(el usuario presiono aceptar sin introducir datos en el prompt) o nombre es distinto de null(el usuario presiono cancelar) entonces muestra la alerta con el nombre de usuario.
	if (nombre !== '' && nombre !== null && loguin) {
		alert(`Bienvenido ${nombre}`);
	}
}

saludarAlosUsuarios(nombre);

function validarArroba() {
	if (loguin) {
		console.log(usuario);
		// validar que se ingreso un usuario para buscar el simbolo de @ en la cadena de texto
		if (usuario !== '' && usuario !== null) {
			// esta condición chequea que el usuario no introduzca una cadena vacía o haga click en cancelar del prompt para buscar la @ en el usuario y no nos de un error en consola
			for (let i = 0; i < usuario.length; i++) {
				if (usuario[i] === '@') {
					tieneArroba = true;
					break; // si tieneArroba es igual a true significa que el usuario contenia @ y con break sales del bucle for
				}
			}
		}

		// otra forma de hacer esto y que seguramente verás con mucha frecuencia en grandes aplicaciones es con el operador lógico de negación !
		// (!tieneArroba) es lo mismo que (tieneArroba != true) lo puedes traducir como "NO tieneArroba" recuerda que es una negación por lo que si en el bucle for le asignaste true a la variable tieneArroba entonces con la negación quedará con valor false y no se le pedirá al usuarion que ingrese un nuevo mail si por el contrario el usuario no tenía @ entonces al negar el valor boolean de false pasará a true y pedirá que ingrese un nuevo mail. Este operador de negación ! al inicio puede ser complejo de entender como funciona y donde usarlo ya que tiene una lógica invertidad como su mismo nombre lo indica pero con el tiempo lo podrás usar con facilidad.
		if (!tieneArroba) {
			usuarioConEmail = prompt('Ingrese nuevo email');
		}
	}
}

validarArroba();

function validarContraMenor() {
	if (loguin) {
		let acc = 0;

		// modificar lenght -> length
		for (let i = 0; i < contra.length; i++) {
			acc++;
		}

		if (acc <= 8) {
			alert('Su contraseña es insegura');
		}
	}
}

validarContraMenor();

function validarContraNumerica() {
	if (loguin) {
		let acc1 = 0;
		let contra1; // tal vez esta variable se debería de llamar consulta en "lugar" de "contra1" ya que lo que vas a recibir es una respuesta del tipo si o no

		// modificar lenght -> length
		for (let i = 0; i < contra.length; i++) {
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
