//10. Todos menores a 10:
//Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en pantalla la leyenda 
//"Todos los números son menores a diez".

const num1 = parseInt(prompt('Ingrese el primer numero'));
const num2 = parseInt(prompt('Ingrese el segundo numero'));
const num3 = parseInt(prompt('Ingrese el tercer numero'));

if(num1 < 10 && num2 < 10 && num3 < 10){
    alert('Todos los numeros son menores a 10')
}else{
    alert('hay algun numero mayor o igual a 10')
}