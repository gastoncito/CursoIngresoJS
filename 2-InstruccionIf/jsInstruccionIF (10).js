function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var miNota;
	miNota=Math.floor((Math.random() * 11) + 1);
	/*alert(miNota);
	if(miNota>8){
		alert("excelente");
	}
	if(miNota<4){
		alert("vamos, la proxima se puede ");}
		if(miNota>3 && miNota<9){
			alert("APROBO");

		}mal hecho*/
		if(miNota>8)
		{
			alert("excelente");
		}
		else
	
		if(miNota<4){
			alert("vamos, la proxima se puede ");				
		}
						
	else
	{
		alert(" APROBO ");
	}
	

}//FIN DE LA FUNCIÓN