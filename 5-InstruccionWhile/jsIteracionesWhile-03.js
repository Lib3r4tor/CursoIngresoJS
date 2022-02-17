/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750")
	{
		alert("Contra incorrecta. Intente nuevamente");

		claveIngresada = prompt("Ingrese el numero clave");
		
	}
	
}//FIN DE LA FUNCIÓN
