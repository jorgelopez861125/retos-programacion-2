//6. 3 cifras o mayor:
//Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje 
//indicando si tiene 1, 2, o 3 cifras. Mostrar un mensaje de error si el número de cifras es mayor.

const cifras = parseInt(prompt('Por favor escriba un numero de tres cifras'));

if(cifras <= 9){
    alert(`el numero: ${cifras} tiene una cifra`);
}else if(cifras >= 10 && cifras <= 99){
    alert(`el numero: ${cifras} tiene dos cifras`)
}else if(cifras >= 100 && cifras < 1000 ){
    alert(`el numero: ${cifras} tiene tres cifras`)
}else if(cifras >= 1000){
    alert('Error')
}else{
    alert(`Por favor ingrese de nuevo el numero`)
}