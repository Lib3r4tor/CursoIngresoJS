/*Ejercicio 07 BIS V2(Realizar en los archivos  del ejercicio 07 del IF)
además de los datos ya ingresados , solicitar el nombre .
si es menor de 13 , , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolexcente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’.
Si no es menor de 13 y está casado , además mostrar el mensaje ‘casada quiere casa’.
Si sos soltero y mayor de edad y no tienes edad para jubilarse , sumar el mensaje ‘a salir ‘
Si sos divorciado y sos adolescente, además mostrar ‘toda una vida por delante’

*/

function mostrar()
{
	var edadIngresada;
	var edadMinima;
	var edadMaximaAdolecente;
	var numeropar;
	var nombre;
	var jublilacion;
	var estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById("estadoCivil").value;

	nombre = prompt("Ingrese su nombre");

	numeropar = 2

	jublilacion = 60;
	edadMinima = 11;
	edadMinima = parseInt(edadMinima);
	edadMaximaAdolecente = 17;
	edadMaximaAdolecente = parseInt(edadMaximaAdolecente);

	if(edadIngresada % numeropar == 0)
	{
		console.log("Tu edad " + edadIngresada + " es par!");
	}

	if(edadIngresada>edadMaximaAdolecente)
	{
		console.log("Tenes edad de laburar.");
		if(edadIngresada == 33)
		{
			console.log("Como cristo");
		}
		else
		{
			if(edadIngresada >= jublilacion)
			{
				console.log("A jubilarse");
			}
			else
			{
				if(edadIngresada == 88)
				{
				console.log("Lindo numero");
				}
			}
		}

	}
	else
	{
		if(edadIngresada<edadMinima)
		{
			console.log("eres chiquito");
		}
	
		else
		{
			if(edadIngresada == 13)
			{
				console.log("Feliz dia");
			}
		}
		if(edadIngresada<edadMaximaAdolecente && edadIngresada>edadMinima)
		{
			console.log("Eres un adolescente.");		
		}
		else
		{
			if(edadIngresada == 17)
			{
				console.log("Ultimo año");
			}
		}
	}
	if(nombre == "violeta" && edadIngresada<edadMaximaAdolecente && edadIngresada>edadMinima)
	{
		console.log("Como un color!")
	}
	else
	{
		if(nombre == "ricardo" && edadIngresada<edadMinima)
		{
			console.log("Muy chiquito para ese nombre");
		}
		else
		{
			if(nombre == "alfredo" && edadIngresada >= jublilacion)
			{
				console.log("Como el de QUENN");
			}
		}
	}
	if(edadIngresada>=13 && estadoCivil == "Casado")
	{
		console.log("Casada quiere casa");
	}
	else{
		if(edadIngresada >= edadMaximaAdolecente && edadIngresada <= jublilacion && estadoCivil == "Soltero")
		{
			console.log("A salir");
		}
		else{
			if(edadIngresada<edadMaximaAdolecente && edadIngresada>edadMinima && estadoCivil == "Divorciado")
			{
				console.log("Toda una vida por delante")
			}
		}
	}
	
	/*else
	{
		if(edadIngresada<edadMinima)
		{
			console.log("Eres un nino");
		}
		else
		{
			if(edadIngresada<edadMaximaAdolecente && edadIngresada>edadMinima)
			{
				console.log("Eres un adolescente.");
				
			}
			else
			{
				if(edadIngresada == 13)
				{
					console.log("Feliz dia");
				}
				else
				{
					if(edadIngresada == 17)
					{
						console.log("Ultimo año");
					}
					else
					{
						if(edadIngresada == 33)
						{
							console.log("Como cristo");
						}
						else
						{
							if(edadIngresada == 60)
							{	
								console.log("A jubilarse");
							}
							else
							{
								if(edadIngresada == 88)
								{
									console.log("Lindo numero");
								}
							}
						}
					}

				}
		}	}
	}
				
			
	/*ejercicio 7
	var edadIngresada;
	var edadAdulta;
	var estado;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estado = document.getElementById("estadoCivil").value;

	edadAdulta= 18;

	if(edadIngresada<edadAdulta && estado!="Soltero"){
		alert("Es muy pequeño para NO ser soltero.")
	}*/
	
}//FIN DE LA FUNCIÓN

