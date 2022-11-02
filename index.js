
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