/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m")
	{
		alert("Sexo no valido.");

		sexoIngresado = prompt("Ingrese f o m");
	}



	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN