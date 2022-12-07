// Por buenas prácticas debes tratar de crear las variables y constantes globales al inicio de tu archivo js, si son locales entonces dentro de la función o el bloque de código donde las necesites
const solicitudAmistad1 = 'Juan Manuel Vega';
const solicitudAmistad2 = 'Maria Elena Martinez';
const solicitudAmistad3 = 'Rodrigo Benitez';
let nombreDelUser; // puedes llamar la variable (nombreUser, user) el nombre que creaste está correcto pero si puedes hacer que sean más cortos y descriptivos mucho mejor.
let listaAmigos = [];

listaAmigos.push(solicitudAmistad1);
listaAmigos.push(solicitudAmistad2);
listaAmigos.push(solicitudAmistad3);

nombreDelUser = prompt('Ingrese su Nombre de Usuario');

console.log(nombreDelUser);

let notaDelUser = prompt('Deja tu comentario');

console.log(notaDelUser.length);

if (notaDelUser.length < 30) {
	// si es menor que 30 caracteres imagino que quieres mostrar algo con un alert o por consola.
	// \n hace un salto de linea en una cadena
	// \" escapa las comillas dobles si tienes que usarlas en una cadena de texto para para que no de errores confundiendolas con las del alert o el console.log
	alert(`La nota \"${notaDelUser}\" tiene menos de 30 caráteres. \n\nNombre de usuario: ${nombreDelUser} \nNota: \"${notaDelUser}\"`);
	console.log(`La nota \"${notaDelUser}\" tiene menos de 30 caráteres.`);
} else {
	alert('Esta entrada excede la cantidad de caracteres disponibles. ');
	console.log('Esta entrada excede la cantidad de caracteres disponibles.');
}

//Entiendo que tienes tres constantes con nombres y apellidos de personas, confirm() es un método que muestra un cuadro de dialogo y devuelve true o false dependiendo si presionas (ok o cancel) ese valor de true/false debes guardarlo en una variable, con solitudAmistad pudieras crear un arreglo(array) pero para esta entrega no debes usar arreglos aun ya que se les enseñan en la clase 6, luego si creas un arreglo con los nombres y apellidos de las personas entonces deberias usar métodos de array como find() que devuelve true o false si encuentra el valor que esta buscando dentro del array entonces si puedieras con el valor que devuelve dependiendo si encuentra o no el nombre y apellidos de la persona que te envio solicitud mostrar el mensaje `El usuario ${i} te ha enviado una solicitud de amistad`, cuando ya hayas estudiado los arreglos y sus métodos entonces puedes intentar esto sino te funciona entonces te ayuda a resolverlo.

// confirm(solicitudAmistad1);
// confirm(solicitudAmistad2);
// confirm(solicitudAmistad3);

// let solicAmistad = ( " Juan Manuel Vega" , " Maria Elena Martinez " , " Rodrigo Benitez" )

// for ( let i = 0 ; i < solicAmistad.length ; i++ ) {

//     confirm = ( `El usuario ${i} te ha enviado una solicitud de amistad` )
// }

// confirm = (`El usuario te ha enviado una solicitud de amistad` )

for (let i = 0; i < listaAmigos.length; i++) {
	confirm(`El usuario ${listaAmigos[i]} te envio una solicitud de amistad`);
}
