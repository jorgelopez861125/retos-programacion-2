//12. Punto en el plano:
//Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y (distintos a cero).
//Posteriormente imprimir en pantalla en que cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)

const x = parseInt(prompt('ingrse la cordenada X'));
const y = parseInt(prompt('ingrese la cordenada Y'));

if(x > 0 && y > 0){
    alert('el punto en el plano se ubica en el primer cuadrante')
}else if(x < 0 && y > 0){
    alert('el punto en el plano se ubica en el segundo cuadrante')
}else if(x < 0 && y < 0){
    alert('el punto en el plano se ubica en el tercer cuadrante')
}else if(x > 0 && y < 0){
    alert('el punto en el plano se ubica en el cuarto cuadrante')
}else{
    alert('el punto en el plano no se ubica en ningun cuadrante')
}