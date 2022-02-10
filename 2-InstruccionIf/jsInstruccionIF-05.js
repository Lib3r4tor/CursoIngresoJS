function mostrar()
{
	var edadIngresada;
	var edadMinima;
	var edadMaxima;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	edadMinima = 11;
	edadMinima = parseInt(edadMinima);
	edadMaxima = 17;
	edadMaxima = parseInt(edadMaxima)

	if(edadIngresada>edadMaxima){
		alert("Eres un adulto.")
	}
	if(edadIngresada<edadMinima){
		alert("Eres un nino")
	}

	


}//FIN DE LA FUNCIÓN