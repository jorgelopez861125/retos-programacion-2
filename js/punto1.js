//1. Mayor y Menor:
//Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, 
//en caso contrario informar el producto y la división del primero respecto al segundo.

const num1 = parseFloat(prompt('Ingrese un número por favor'));
const num2 = parseFloat(prompt('Ingrese un número por favor'));

if (num1 > num2 ) {
    alert(`la suma es ${num1 + num2} y la diferencia es ${num1 - num2}`) 
} else if (num2 > num1) {
   alert(`el producto es ${num1 * num2} y la division es ${num1 / num2}`) 
}
