function mostrar()
{
	var edadIngresada;
	var edadMinima;
	var edadMaxima;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	edadMinima = 12;
	edadMaxima = 18;

	if(edadIngresada<edadMaxima && edadIngresada>edadMinima){
		alert("Eres un adolescente.")
	}

	


}//FIN DE LA FUNCIÓN