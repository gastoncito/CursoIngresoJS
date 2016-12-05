function Mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo;
	var respuesta='si';

	while(respuesta!='no')
	{   
		contador++;
		numeroIngresado=prompt("ingresar el numero ");
		numeroIngresado=parseInt(numeroIngresado);
		if(contador==1)
		{

			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}else
		{

		
		if(numeroIngresado<minimo)
		{

			minimo=numeroIngresado;
		}
		if(numeroIngresado>maximo)
		{
			maximo=numeroIngresado;
		}

		}



		
		respuesta=prompt("desea contunuar, si o no ");

	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;




}//FIN DE LA FUNCIÓN