function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=='si')
	{
		contador++;
		numeroIngresado=prompt("ingresar el numero ");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{

			negativo=negativo*numeroIngresado;

		}else
		{
			positivo=positivo+numeroIngresado;
		}

		
		



		respuesta=prompt("desea contunuar, si o no ");
	}	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN