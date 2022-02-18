/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var numeroParseado
	//iniciar variables

	banderaDelPrimero = "es el primero";

	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero ");
		numeroParseado = parseInt(numeroIngresado);

		while(isNaN(numeroParseado))
		{
			numeroIngresado = prompt("Dato incorrecto, ingrese un numero");
			numeroParseado = parseInt(numeroIngresado);
		}

		if(banderaDelPrimero == "es el primero")
		{
			numeroMaximo = numeroParseado;
			numeroMinimo = numeroParseado;
			banderaDelPrimero = "No lo es mas."
		}
		else
		{
			if(numeroParseado < numeroMinimo)
			{
				numeroMinimo = numeroParseado;
			}
			else
			{
				if(numeroParseado > numeroMaximo)
				{
					numeroMaximo = numeroParseado;
				}
			}
		}

			
		
		
		respuesta=prompt("Desea continuar?");
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN