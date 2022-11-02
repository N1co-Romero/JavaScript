// let nombre = prompt("ingrese un nombre")
// let edad = prompt("ingrese su edad")

// if (edad >= 18) {
//     console.log("hola " + nombre + " adulto responsable")
// } else {
//     console.log("hola " + nombre + " pendejo menor")
// }

// let precio = 1500
// let oferr = parseInt(prompt("ingrese su oferta:"))

// if (precio <= oferr) {
//     console.log("I like it that!")

// } else {
//     console.warn("no way bitch")
// }


// let sign = parseInt(prompt("Ingrese su edad:"))
// while (sign != "ESC") {
//     switch (sign) {
//         case sign >= 18:
//             alert("si")
//             break;
//         case sign < 18:
//             alert("no")
//             break;
//         default:
//             break;

//     }
//     sign = parseInt(prompt("Ingrese su edad:"))
// }

let nombre = prompt("ingrese su nombre:")
let consultorio = 0
let doctor = prompt("Con que doctor desea sacar turno: DOC1 - DOC2 - DOC3")
for (let i = 1; i <= 4; i++) {
    if (doctor == "DOC1") {
        consultorio = 32
    } else if (doctor == "DOC2") {
        consultorio = 54
    } else if (doctor == "DOC3") {
        consultorio = 54
    }
    console.log("turno numero " + i + " paciente: " + nombre + " DOCTOR: " + doctor + " consultorio: " + consultorio)

    nombre = prompt("ingrese su nombre:")
    doctor = prompt("Con que doctor desea sacar turno: DOC1 - DOC2 - DOC3")
}