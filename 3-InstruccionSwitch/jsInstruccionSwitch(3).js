function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	console.log(mesDelAño);
	switch(mesDelAño){
		case "Febrero":
		alert("Este mes no tiene mas de 29 dias. ");
		break;
		default:
		alert("Este mes tiene 30 dias o más dias ");
		break;
		






	}
	


}//FIN DE LA FUNCIÓN