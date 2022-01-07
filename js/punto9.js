//9. Todos iguales:
//Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado 
//se lo multiplica por el tercero.

const num1 = parseInt(prompt('Escriba el primer numero'));
const num2 = parseInt(prompt('Escriba el segundo numero'));
const num3 = parseInt(prompt('Escriba el tercer numero'));

if(num1 === num2 && num2 === num3){
    const resultadoProblema = (num1 + num2) * num3;
    alert(`el resultado es: ${resultadoProblema}`)
}else{
    alert(`Ingresar numeros iguales`)
}