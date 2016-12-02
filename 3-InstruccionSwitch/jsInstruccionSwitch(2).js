function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
console.log(mesDelAño);
//alert (mesDelAño);
switch(mesDelAño){

case "Enero":
case "Febrero":
case "Marzo":
case "Abril":
case "Mayo":
case "Junio":
alert("Falta para el invierno ");
break;
case "Julio":
alert("Abrigate que hace frio ");
break;
case "Agosto":
alert("Abrigate que hace frio ");
break;
/*case "Septiembre":
case "Octubre":
case "Noviembre":
case "Diciembre": opcion larga*/
default:
alert("Ya pasamos el frio, Ahora calor!!!")
break;


}




}//FIN DE LA FUNCIÓN