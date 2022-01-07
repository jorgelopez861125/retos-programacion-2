//8. ¿Es Navidad?:
//Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad.

const dia = parseInt(prompt('Escriba el numero del dia'));
const mes = parseInt(prompt('Escriba el numero del mes'));
const año = parseInt(prompt('Escriba el numero del año'));


if (dia === 25 && mes === 12) {
    alert(`Hoy ${dia}/${mes}/${año} es navidad!!`)
}else {
    alert(`${dia}/${mes}/${año} hoy no es navidad`)
}