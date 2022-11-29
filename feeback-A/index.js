const datosIngreso = (usuario, contraseña) => {
    if (usuario != usuarioGuardado && contraseña != contraseñaGuardada) {
        alert("el usuario y la contraseña ingresada son incorrectos")
    } else if (usuario != usuarioGuardado) {
        alert("el usuario ingresado es incorrecto")
    } else if (contraseña != contraseñaGuardada) {
        alert("la contraseña ingresada es incorrecta")
    } else {
        alert(`Bienvenido ${nombreGuardado}`)
    }

}

let nombreGuardado = "lucas"

let usuarioGuardado = "lucasgmail.com"

let contraseñaGuardada = "lucasaaaa"

let usuarioIngresado = prompt("ingrese nombre de usuario")

let contraseñaIngresada = prompt("ingrese su contraseña")

datosIngreso(usuarioIngresado, contraseñaIngresada)





const confirmarArroba = ( usuario ) => {

    let arroba = false

    for (let i = 0; i < usuario.length; i++){
        if(usuario[i] === "@") {
            arroba = true
        }
    }

    return arroba
}


const cambioUsuario = (user) =>{
    if(confirmarArroba(usuarioIngresado) === false){
        usuarioIngresado = prompt("su usuario debe tener arroba, ingrese un nuevo usuario con arroba")
    }

}

cambioUsuario(usuarioIngresado)


usuarioGuardado=usuarioIngresado


const verificadorContraseña = (contraseña) => {
    if (contraseña.length < 8) {
        alert(`su contraseña es insegura`)

    }
}

verificadorContraseña(contraseñaIngresada)

const validoNumero = (contraseña) =>{

       let confirmoContraseña = false

    for(let i = 0; i < contraseña.length;i++){
        if(contraseña[i].match(/[1234567890]/)){
            confirmoContraseña = true
        }

    }
    return confirmoContraseña
}

validoNumero(contraseñaIngresada)


const cambioContraseña = (contraseña) => {
    let pregunta = ""
    if(validoNumero(contraseñaIngresada) === false){
         pregunta = prompt("Su contraseña debe tener caracteres alfanuméricos. Desea cambiarla?")
    }
    if(pregunta === "si"){
        contraseñaIngresada = prompt("ingrese nueva contraseña")
    }
}

cambioContraseña(contraseñaIngresada)


contraseñaGuardada=contraseñaIngresada

