//2. Nota del Alumno:
//Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar un mensaje "Promocionado".

const num1 = parseFloat(prompt('Ingrese un número por favor'));
const num2 = parseFloat(prompt('Ingrese un número por favor'));
const num3 = parseFloat(prompt('Ingrese un número por favor'));

if ((num1 + num2 + num3) / 3 >= 7 ) {
    alert(`promocionado`)
}
