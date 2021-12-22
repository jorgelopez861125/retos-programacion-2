const num = parseFloat(prompt('Ingrese un número por favor'));

if (num > 0) {
    alert(`el numero ${num} es positivo`)
} else if (num === 0) {
    alert(`el numero ${num} es nulo`)
} else {
    alert(`el numero ${num} es negativo`)
}