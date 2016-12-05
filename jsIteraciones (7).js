function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(respuesta=='si')
	{
		contador++;
		numeroIngresado=prompt("ingresar el numero ");
		console.log(contador);
		acumulador=acumulador+parseInt(numeroIngresado)
		respuesta=prompt("desea contunuar, si o no ");
	}	


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN