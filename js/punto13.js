//13. Sueldo a pagar:
//De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe:
//a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
//b)Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
//c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios.

const sueldo = parseInt(prompt('Por favor ingrese el monto del sueldo'));
const añosDeAntiguedad = parseInt(prompt('ingrese los años de antiguedad que tiene en la empresa'));
let aumento = 0;
let sueldoTotal = 0;
if(sueldo >= 500) {
    alert(`su sueldo es de: $${sueldo}`)
}else if(sueldo < 500 && añosDeAntiguedad >= 10) {
    aumento = sueldo*20/100;
    sueldoTotal = sueldo + aumento;
    alert(`su sueldo con aumento es de: $${sueldoTotal}`)
}else if(sueldo < 500 && añosDeAntiguedad < 10) {
    aumento = sueldo*5/100;
    sueldoTotal = sueldo + aumento;
    alert(`su sueldo con aumento es de: $${sueldoTotal}$`)
}