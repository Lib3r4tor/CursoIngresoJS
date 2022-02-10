function mostrar()
{
	//tomo la edad  
	var edadIngresada
	var mayorEdad

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	mayorEdad = 18
	mayorEdad = parseInt(mayorEdad);

	if(edadIngresada==mayorEdad){
		alert("Usted es mayor de edad.")
	}

}//FIN DE LA FUNCIÓN