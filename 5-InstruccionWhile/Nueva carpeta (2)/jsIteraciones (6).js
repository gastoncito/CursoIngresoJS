function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	

	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("ingresar el numero ");
		console.log(contador);
		//acumulador=acumulador+numeroIngresado;(concatena)
		acumulador=acumulador+parseInt(numeroIngresado);
	}	



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN