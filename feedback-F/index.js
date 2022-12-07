// let nombreDelUser = prompt('Ingrese su Nombre de Usuario');

// console.log(nombreDelUser);

// let notaDelUser = prompt('Deja tu comentario');

// console.log(notaDelUser.length);

// if (notaDelUser.length < 30) {
// } else if (5 == 5) {
//     alert('Esta entrada excede la cantidad de caracteres disponibles. ')
// } else {
// 	alert(nombreDelUser + notaDelUser);
// }

let solicAmistad = `Juan Manuel Rojas`;
let solicAmistad1 = `Maria Julia Valverde`;
let solicAmistad2 = `Joaquina Fernandez`;

let listaAmigos = [];

listaAmigos.push(solicAmistad);
listaAmigos.push(solicAmistad1);
listaAmigos.push(solicAmistad2);

// for (let i = 0; i <= 2; i++) {
// 	confirm(`El usuario ${listaAmigos[i]} te envio una solicitud de amistad`);
// }

for (let i = 0; i < listaAmigos.length; i++) {
	confirm(`El usuario ${listaAmigos[i]} te envio una solicitud de amistad`);
}

// if (solicAmistad <= 3) {
// 	confirm(`El usuario ${solicAmistad1} te envio una solicitud de amistad`);
// } else if (solicAmistad1 <= 3) {
// 	confirm(`El usuario ${solicAmistad2} te envio una solicitud de amistad`);
// }
