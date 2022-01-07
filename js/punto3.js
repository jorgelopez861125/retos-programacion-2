//3. Uno o dos dígitos:
//Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos.
// Tener en cuenta que condición debe cumplirse para tener dos dígitos.


const num1 = parseFloat(prompt('Ingrese un número por favor'));

if (num1 < 10) {
    alert(`el numero es de un digito`)
} else if (num1 < 100) {
    alert(`el numero ${num1} es de dos digitos`)   
}