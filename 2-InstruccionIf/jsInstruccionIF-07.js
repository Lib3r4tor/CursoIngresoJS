function mostrar()
{
	var edadIngresada;
	var edadAdulta;
	var estado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estado = document.getElementById("estadoCivil").value;

	edadAdulta= 18;

	if(edadIngresada<edadAdulta && estado!="Soltero"){
		alert("Es muy pequeño para NO ser soltero.")
	}
	
}//FIN DE LA FUNCIÓN