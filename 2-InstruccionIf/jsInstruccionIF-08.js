function mostrar()
{
	var edadIngresada;
	var edadAdulta;
	var estado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estado = document.getElementById("estadoCivil").value;

	edadAdulta= 17;

	if(edadIngresada>edadAdulta && estado =="Soltero"){
		alert("Es soltero y no es menor.")
	}
	

}//FIN DE LA FUNCIÓN