/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var precio1;
		var precio2;
		var precio3;
		var sumar;
		precio1=document.getElementById('PrecioUno').value;
		precio1=parseInt(precio1);
		precio2=document.getElementById('PrecioDos').value;
		precio2=parseInt(precio2);
        precio3=document.getElementById('PrecioTres').value;
        precio3=parseInt(precio3);

		sumar=precio1+precio2+precio3;
		alert("la suma de los precios es "+ sumar);
	
	
}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}