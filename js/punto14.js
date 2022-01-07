//14. Rango de variacion:
//Escribir un programa en el cual: dada una lista de tres valores numéricos distintos se calcule e informe 
//su rango de variación (debe mostrar el mayor y el menor de ellos)

const num1 = parseInt(prompt('Por favor ingrese el primer numero'));
const num2 = parseInt(prompt('Por favor ingrese el segundo numero'));
const num3 = parseInt(prompt('Por favor ingrese el tercer numero'));

if (num1 > num2 && num1 > num3 && num2 > num3) {
    alert(`el numero mayor de los tres es el: ${num1} y el numero menor de los tres es el: ${num3}`)
    } else if (num3 > num2) {
        alert(`el numero mayor de los tres es el: ${num1} y el numero menor de los tres es el: ${num2}`)
    }else if (num2 > num1 && num2  > num3 && num1 > num3) {
    alert(`el numero mayor de los tres es el: ${num2} y el numero menor de los tres es el: ${num3}`)
    } else if (num3 > num1) {
        alert(`el numero mayor de los tres es el: ${num2} y el numero menor de los tres es el: ${num1}`)
    }else if(num3 > num1 && num3 > num2 && num1 > num2){
    alert(`el numero mayor de los tres es el: ${num3} y el numero menor de los tres es el: ${num2}`)
    } else if (num2 > num1) {
        alert(`el numero mayor de los tres es el: ${num3} y el numero menor de los tres es el: ${num1}`)
    }else{
    alert('Por favor escriba numeros diferentes')
}


