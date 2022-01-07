//5. Positivo, nulo o negativo:
//Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, nulo o negativo.

const num = parseFloat(prompt('Ingrese un número por favor'));

if (num > 0) {
    alert(`el numero ${num} es positivo`)
} else if (num === 0) {
    alert(`el numero ${num} es nulo`)
} else {
    alert(`el numero ${num} es negativo`)
}