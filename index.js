
// let nombre = prompt("ingrese su nombre:")
// let consultorio = 0
// let doctor = prompt("Con que doctor desea sacar turno: DOC1 - DOC2 - DOC3")
// for (let i = 1; i <= 4; i++) {
//     switch (doctor) {
//         case "DOC1":
//             consultorio = 32
//             break
//         case "DOC2":
//             consultorio = 65
//             break
//         case "DOC3":
//             consultorio = 54
//             break
//         default:
//             consultorio = "a definir"
//     }
//     console.log("turno numero " + i + " paciente: " + nombre + " DOCTOR: " + doctor + " consultorio: " + consultorio)

//     nombre = prompt("ingrese su nombre:")
//     doctor = prompt("Con que doctor desea sacar turno: DOC1 - DOC2 - DOC3")
// }



// function captalize() {
//     let inicial = nombre.substring(0, 1)
//     let resto = nombre.substring(1, nombre.length)
//     console.log(inicial.toUpperCase() + resto.toLocaleLowerCase())
// }

// function login() {
//     let usuario = prompt("ingrese su nombre de usuario:")
//     if (usuario.trim != "" && usuario.trim().length > 0) {
//         login = usuario
//         console.log("bienvenid@ " + login)
//     } else {
//         console.error("idetifiquese!")
//     }

// }
// login()


// function user() {
//     let login = prompt("ingrese su nombre:")
//     if (login.trim != "" && login.trim().length > 0) {
//         user = login
//         console.log("Bienvenid@ " + user)
//     } else {
//         console.log("ingrese un nombre valido")
//     }
// }

// user()

// function calculadora(nr1, nr2, operador) {
//     switch (operador) {
//         case "+":
//             return nr1 + nr2
//             break
//         case "-":
//             return nr1 - nr2
//             break
//         case "*":
//             return nr1 * nr2
//             break
//         case "/":
//             return nr1 / nr2
//             break
//         default:
//             return ("error en el calculo")
//     }
// }

// function iniciarcalcu() {
//     let nr1 = parseFloat(prompt("ingrese un numero"))
//     let nr2 = parseFloat(prompt("ingrese un numero"))
//     let operador = prompt("ingrese un operador")
//     console.log(calculadora(nr1, nr2, operador))
// }

// iniciarcalcu()

const doc1 = [{ dr: "a", nombre: "Dra. Dicon", tipo: 'Vascular', Consultorio: "Consultorio 58" },
{ dr: "b", nombre: "Dr. Aguirre", tipo: 'Reumatologo', Consultorio: "Consultorio 50" },
{ dr: "c", nombre: "Dr. Tavarez", tipo: 'Hematologo', Consultorio: "Consultorio 52" },
{ dr: "d", nombre: "Dr. Herrera", tipo: 'Pediatra', Consultorio: "Consultorio 55" },
]



const turnero = []
function buscarDoctor(dr) {
    let resultado = doctores.find(doctores => doctores.dr === parseFloat(dr))
    return resultado
}

const inicio = "seleccione su profesional: \n" +
    "a)Vascular (Dra.Dicon) \n" +
    "b)Reumatologo (Dr. Aguirre) \n" +
    "c)Hematologo (Dr. Tavarez) \n" +
    "d)Pediatra (Dr. Herrera) \n"

function seleccion() {
    let dr = prompt(inicio)
    if (dr != "a" && dr != "b" && dr != "c" && dr != "d") {
        alert("⛔️ Error en el código ingresado.")
        return
    } else {
        for (let i = 1; i <= 4; i++) {
            switch (dr) {
                case "a":
                    console.log("Turno: " + i + "" + nombre + "" + "especialidad: " + tipo)
                case "a":

                case "a":

                case "a":

                default:

            }
        }
    }
}
seleccion()
verTurnero()






// let drelegido = buscarDoctor(dr)
//     turnero.push(nombre)
//     let respuesta = confirm("¿Deseas otro Turno?")
//     if (respuesta) {
//         seleccion()
//         return
//     }

// }

// function verTurnero() {
//     if (turnero.length > 0) {
//         console.log(turnero)
//     } else {
//         console.warn("No hay turnos pendientes!")
//     }
// }