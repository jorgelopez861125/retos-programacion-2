const cifras = parseInt(prompt('Por favor escriba un numero'));

if(cifras <= 9){
    alert(`el numero: ${cifras} tiene una cifra`);
}else if(cifras >= 10 && cifras <= 99){
    alert(`el numero: ${cifras} tiene dos cifras`)
}else if(cifras >= 100 && cifras < 1000 ){
    alert(`el numero: ${cifras} tiene tres cifra`)
}else if(cifras >= 1000){
    alert('Error')
}else{
    alert(`Por favor ingrese de nuevo el numero`)
}