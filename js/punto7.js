//7. Nivel de Capacidad:
//Un postulante a un empleo, realiza un test de capacitación, se obtuvo la siguiente información: cantidad total de preguntas que 
//se le realizaron y la cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que ingrese los dos datos 
//por teclado e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:

//	Nivel máximo:  Porcentaje>=90%.
//	Nivel medio:	   Porcentaje>=75% y <90%.
//	Nivel regular:	   Porcentaje>=50% y <75%.
//	Fuera de nivel: Porcentaje<50%.

const cantidadPreguntas = parseInt(prompt('cantidad de preguntas'));
const preguntasRespondidas = parseInt(prompt('cantidad de preguntas respondidas correctamente'));

const porcentajesPreg = Math.floor( (preguntasRespondidas*100)/cantidadPreguntas ) ;


 if(porcentajesPreg >= 90){
     alert(`Respondiste el ${porcentajesPreg + '%'} del examen correctamente, estas en el nvel maximo!!`)
}else if(porcentajesPreg >= 75 && porcentajesPreg < 90){
        alert(`Respodiste el ${porcentajesPreg + '%'} del examen correctamente, estas en el nivel medio!!`)
}else if(porcentajesPreg >= 50 && porcentajesPreg < 75){
    alert(`Respodiste el ${porcentajesPreg + '%'} del examen correctamente, estas en el nivel regular`)
}else if(porcentajesPreg < 50){
    alert(`has resuelto el ${porcentajesPreg + '%'} del examen correctamente, estas fuera de nivel`)
}