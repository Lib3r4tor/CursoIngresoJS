/*
Ejercicio While 07 V1 (Realizar en los archivos  del ejercicio 07 del WHILE)

Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de 5 estudiantes de la UTN, 

	informar :
	a)El promedio de las alturas totales.
	b)Cantidad de personas de cada sexo.
	c)Cantidad de aprobados(más de 6)
	d)La cantidad de mujeres que su altura supere
	los 190 centímetros.
	e)Que sexo tiene mas alumnos
	f)el nombre de la persona más alta 
	g)la edad de la primera persona con fiebre (más de 37)
	h)el nombre de la primer mujer aprobada
	i) la altura promedio de los aprobados
	j)el nombre del primer hombre, que mide menos de 160 cm y  esta  desaprobado.


*/
function mostrar()
{
	var alturaIngresado;
    var sexoIngresado;
	var edadIngresada;
	var temperaturaIngresada;
	var notaIngresada;
	var nombreIngresado
    var contadorIteraciones;
    var numeroParseado;
    var promedioDivision;
    var acumuladorAltura;
    var promedioAlturaTotal;
    var bandera;
	var segundoParseado;
	var tercerParseado;
	var cuartoParseado;
	var contadorAlumnosAprobados;
	var contadorMujeresAltas
	var contadorMasculino;
	var contadorFemenino;
	var contadorNoBinario;
	var contadorAlumnos
	var contadorSexoAlumnosMasculinos;
	var contadorSexoAlumnosFemeninos;
	var contadorSexoAlumnosNoBinarios;
	var contadorConAlumnosDelSexo;
	var alturaMaxima;
	var alturaMinima;
	var nombrePersonaAlta;
	var edadFiebre;
	var personasFemeninaAprobada;
	var contadorAlturaPersonasAprobadas;
	var acumuladorAlturaPersonasAprobadas;
	var promedioAlturaAprobados;
	var contadorAlumnosDesaprobados;
	var nombreDeHombreDesaprobado;
	var porcentajeAprobados;
	var notaHombreAlto;
	var porcentajeFiebre;
	var contadorPersonasMayoresFiebre

	//Contadores
    contadorIteraciones = 5;
	contadorMasculino = 0;
	contadorFemenino = 0;
	contadorNoBinario = 0;
	contadorAlumnosAprobados = 0;
	contadorMujeresAltas = 0;
	contadorAlumnos = 0;
	acumuladorAltura = 0;
	contadorAlumnosDesaprobados = 0;

    bandera = "Es la primera vuelta"

    promedioAlturaTotalDivision = 5;

	porcentajeAprobados = 5;

	porcentajeFiebre = 5;

	personasMayoresFiebre = 0;



    while(contadorAlumnos<5)
    {
		//Ingreso de altura

        alturaIngresado =  prompt("Ingrese su altura (de 0 a 250 cm)");
        numeroParseado = parseInt(alturaIngresado);

        while(isNaN(numeroParseado))
		{
			alturaIngresado = prompt("Dato incorrecto, ingrese un numero");
			numeroParseado = parseInt(alturaIngresado);
		}

        while(numeroParseado < 0 || numeroParseado > 250)
        {
            alert("Altura ingresada no valida, intente de nuevo");

            numeroParseado = prompt("Ingrese su altura");
        }
		//Edad ingresada

		edadIngresada = prompt("Ingrese su edad");
		segundoParseado = parseInt(edadIngresada);

		while(isNaN(segundoParseado))
		{
			edadIngresada = prompt("Edad no valida, intente de vuelta");
			segundoParseado = parseInt(edadIngresada);
		}

		while(segundoParseado<18 || segundoParseado > 80)
		{
			edadIngresada = prompt("Edad minima/maxima no valida, intente de nuevo");
			segundoParseado = parseInt(edadIngresada);
		}
		//Ingreso de temperatura

		temperaturaIngresada = prompt("Ingrese su temperatura corporal");
		tercerParseado = parseInt(temperaturaIngresada);

		while(isNaN(tercerParseado))
		{
			temperaturaIngresada = prompt("Temperatura no valida, intente de vuelta");
			tercerParseado = parseInt(temperaturaIngresada);
		}

		while(tercerParseado <29 || tercerParseado > 52)
		{
			temperaturaIngresada = prompt("Temperatura Maxima, mnima no valida, intente de nuevo");
			tercerParseado = parseInt(temperaturaIngresada);
		}
		//Ingreso de sexo

        sexoIngresado = prompt("ingrese su sexo. (f, m o nb).");

        while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "nb")
        {
            alert("Sexo no valido.");
    
            sexoIngresado = prompt("Ingrese f, m o nb");
        }
		switch(sexoIngresado)
		{
			case "f":
				contadorFemenino++;
				break;
			case "m":
				contadorMasculino++;
				break;
			case "nb":
				contadorNoBinario++;
				break;
		}
		//mas alumnos con su sexo
		if(contadorFemenino >contadorMasculino && contadorFemenino > contadorNoBinario)
		{
			contadorSexoAlumnosFemeninos = contadorFemenino;
			contadorConAlumnosDelSexo = "Femeninos";
		}
		else
		{
			if(contadorNoBinario>contadorMasculino && contadorNoBinario > contadorFemenino)
			{
				contadorSexoAlumnosNoBinarios = contadorNoBinario;
				contadorConAlumnosDelSexo = "No Binarios";
			}
			else
			{
				if(contadorMasculino>contadorFemenino && contadorMasculino>contadorNoBinario)
				{
					contadorSexoAlumnosMasculinos = contadorMasculino;
					contadorConAlumnosDelSexo = "Masculinos";
				}																							
			}
		}

		//Ingreso de notas

		notaIngresada = prompt("Ingrese su calificacion");
		cuartoParseado = parseInt(notaIngresada);

		while(isNaN(cuartoParseado))
		{
			notaIngresada = prompt("Calificacion no valida, ingrese un numero");
			cuartoParseado = parseInt(notaIngresada);
		}
		while(cuartoParseado < 0 && tercerParseado > 10)
		{
			notaIngresada = prompt("Calificacion no valida, ingrese del 0 al 10");
			cuartoParseado = parseInt(notaIngresada);
		}
		//Aprobados
		if(cuartoParseado > 6)
		{
			contadorAlumnosAprobados++;
			contadorAlturaPersonasAprobadas = numeroParseado;
		}
		//Desaprobados
		else
		{
			if(cuartoParseado<6)
			{
				contadorAlumnosDesaprobados++;
			}
		}

		//Ingreso de nombre

		nombreIngresado = prompt("Ingrese su nombre");

		//suma de altura
        acumuladorAltura += numeroParseado;
		acumuladorAlturaPersonasAprobadas += contadorAlturaPersonasAprobadas;
		//Bandera 
        if(bandera == "Es la primera vuelta")
        {
            alturaMaxima = numeroParseado;

            alturaMinima = numeroParseado;

            bandera = "Ya no es la primera vuelta"
        }
		//Altura minima y maxima
        else
        {
            if(numeroParseado > alturaMaxima)
            {
                alturaMaxima = numeroParseado;
				nombrePersonaAlta = nombreIngresado;
            }
            else
            {
                if(numeroParseado < alturaMinima)
                {
                    alturaMinima = numeroParseado;
                }
            }
        }
		//Edad de la persona con mas fiebre
		if(temperaturaIngresada > 37)
		{
			edadFiebre = edadIngresada;
		}

		if(temperaturaIngresada > 37 && edadIngresada >= 50)
		{
			contadorPersonasMayoresFiebre++;
		}
		
		//Ejercicio de mujeres que superen los 190cm
        if(numeroParseado > 190 && sexoIngresado == "f")
            {
                contadorMujeresAltas++;
            }  
		//Nombre de la mujer aprobada
		if(cuartoParseado > 6 && sexoIngresado == "f")
		{
			personasFemeninaAprobada = nombreIngresado;
			personasFemeninaAprobada = personasFemeninaAprobada + nombreIngresado;
		}
		//Nombre del hombre que mide menos de 160 y desaprobo
		else{
			if(cuartoParseado < 6 && sexoIngresado == "m" && alturaIngresado <= 160)
			{
				nombreDeHombreDesaprobado = nombreIngresado;
			}
			//Nota del varon que mide mas de 200
			else{
				if(sexoIngresado == "m" && numeroParseado >= 200)
				{
					notaHombreAlto = cuartoParseado;
				}
			}
		}	 
        
		//Finaliza el while y vuelve a ejecutarse
   		contadorAlumnos++;

    }
	//porcentajes
	porcentajeFiebre = porcentajeFiebre * contadorPersonasMayoresFiebre / 100
	porcentajeAprobados = porcentajeAprobados * contadorAlumnosAprobados / 100
	//promedio de altura
    promedioAlturaTotal = acumuladorAltura / promedioDivision;
	promedioAlturaAprobados = acumuladorAlturaPersonasAprobadas / promedioDivision;


	alert("El promedio de altura total es " + promedioAlturaTotal + " y la cantidad de personas de cada sexo son " + contadorMasculino + " los masculinos, " + contadorFemenino + " los femeninos y " + contadorNoBinario + "los no binarios. La cantidad de personas aprobadas son " + contadorAlumnosAprobados + ". La cantidad de mujeres que su altura supere los 190 cm son " + contadorMujeresAltas + ". El nombre de la persona mas alta es " + nombrePersonaAlta + ". La edad de la persona con mas fiebre es " + edadFiebre + ". El nombre de la mujer aprobada es " + personasFemeninaAprobada + ". El promedio de altura es " + promedioAlturaAprobados + "El nombre del chico que mide menos de 160 y desaprobo es " +  nombreDeHombreDesaprobado + ". El porcentaje de aprobados que estan sobre los alumnos es " + porcentajeAprobados + ". La nota y el nombre del primer baron mas alto es " + notaHombreAlto + nombrePersonaAlta);
}//FIN DE LA FUNCIÓN
























































/*function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var suma;

	contador=0;
	acumulador=0;
	respuesta='si';
	numero = prompt("Ingrese un numero");

	while(respuesta != 'no')
	{
		numero = prompt("Ingrese los numeros");
		numero = parseInt(numero)
		acumulador= acumulador + numero;
		contador ++;
		respuesta = prompt("Si ya no quiere ingresar numeros escriba 'no'");
		

	}


	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/contador;

}
*/
