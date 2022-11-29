
// Base de datos para registrar usuarios

let nick = prompt ('Ingrese su usuario')

let newPassword = prompt ('Ingrese su password')

let ingreseSuMail = prompt ('Ingrese su email')

let siTiene = false

let siContiene = false

let siTieneOcho = false


function arroba (){
while (siContiene=true){

    if ( ingreseSuMail.match(/[@]/)){
        siContiene=true
        break;
    }
    else {
    alert ('Su email debe tener arroba')
    ingreseSuMail = prompt ('Ingrese su email')
        }
    }
}


function number (){
while (siTiene=true){

    if ( newPassword.match(/[123456789]/)){
        siTiene=true
        break;
    }
    else {
    alert ('Su password debe tener caracteres alfanumericos')
    newPassword = prompt ('Ingrese su password')
    }
    }
}

function passwordCaracteres (){
while (siTieneOcho=true){
    if ( newPassword.length < password.length){
        alert ('Pasword ingresada debe tener mas de ocho caracteres')
        newPassword = prompt ('Ingrese su password')

    } else {
        siTiene = true;
        alert (`Bienvenido usuario ${nick}, su email : ${ingreseSuMail} y password fueron registrados correctamente, gracias!`)
        break;
    }
}
}


number()

arroba()

passwordCaracteres()



















