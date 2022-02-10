function mostrar()
{
	//tomo la edad  
	var edadIngresada
	var mayorEdad

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	mayorEdad = 17
	mayorEdad = parseInt(mayorEdad);

	if(edadIngresada>mayorEdad){
		alert("Usted es mayor de edad.")
	}
	if(edadIngresada<mayorEdad){
		alert("Usted es menor de edad, no puede ingresar.");
	}

	

}//FIN DE LA FUNCIÓN