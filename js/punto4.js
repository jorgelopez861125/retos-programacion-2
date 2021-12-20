const num1 = parseFloat(prompt('Ingrese un número por favor'));
const num2 = parseFloat(prompt('Ingrese un número por favor'));
const num3 = parseFloat(prompt('Ingrese un número por favor'));

if (num1 > num2 & num1 > num3) {
    alert(`el numero ${num1} es el mayor`)
} else if (num2 > num1 & num2 > num3) {
    alert(`el numero ${num2} es el mayor`)
} else if (num3 > num1 & num3 > num2) {
    alert(`el numero ${num3} es el mayor`)
}