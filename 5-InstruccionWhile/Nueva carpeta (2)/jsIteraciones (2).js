function Mostrar()
{

	var contador;
	contador=10;
	document.write("<h1> Hola </h1> ");
	//alert('iteración while');
	while(contador>0)
	{
		console.log(contador);// para mostrar antes de restar
		document.write("<br>contador: "+contador);
		contador--;


		//console.log(contador);
		//document.write("<br>contador: "+contador);aca muestra del 9 a 0
	}
	console.log("<p>fin</p> ");	


}//FIN DE LA FUNCIÓN