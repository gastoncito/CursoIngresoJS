function Mostrar()
{
//tomo la edad  
var laEdad;
laEdad=document.getElementById('edad').value;
if(laEdad<13){
	alert("Ustedes es un niño")

/*if(laEdad>=13 && laEdad<=17){
	alert("Usted es un adolescente ");opcinal consume mas recursos*/
}else
if(laEdad>17){
	alert("usted es mayor de edad");
}else
{alert("Usted es un adolescente ");
}


}//FIN DE LA FUNCIÓN