const num1 = parseFloat(prompt('Ingrese un número por favor'));
const num2 = parseFloat(prompt('Ingrese un número por favor'));

if (num1 > num2 ) {
    alert(`la suma es ${num1 + num2} y la diferencia es ${num1 - num2}`) 
} else if (num2 > num1) {
   alert(`el producto es ${num1 * num2} y la division es ${num1 / num2}`) 
}
