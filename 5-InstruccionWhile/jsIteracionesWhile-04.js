/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	parseInt(numeroIngresado);

	while(numeroIngresado>10)  
	{
		alert("Los numeros que ingreso no estan dentro de lo pedido");

		numeroIngresado = prompt("Ingrese un numero del 1 al 9");

	}

	while(numeroIngresado<0)
	{
		alert("Los numeros que ingreso no estan dentro de lo pedido");

		numeroIngresado = prompt("Ingrese un numero del 1 al 9");

	}


	document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN