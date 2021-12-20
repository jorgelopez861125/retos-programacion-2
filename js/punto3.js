const num1 = parseFloat(prompt('Ingrese un número por favor'));

if (num1 < 10) {
    alert(`el numero es de un digito`)
} else if (num1 < 100) {
    alert(`el numero ${num1} es de dos digitos`)   
}