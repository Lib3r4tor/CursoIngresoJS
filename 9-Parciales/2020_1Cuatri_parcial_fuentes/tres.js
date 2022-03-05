/*
Ejercicio parcial 3
Ivan Gonzalez Div H   
3- De 5  personas que suben a un avión necesitamos tomar y validar los siguientes datos:

nombre , asiento [1 al 100],importe del pasaje de 0 a 300000, sexo [m,f o nb] y edad [1 a 100].
a)Informar el último asiento ingresado con el nombre  y su importe.
b)La edad promedio de las mujeres.
c)el maximo importe ingresado por un pasaje de un pasajero sexo nb.
d)el minimo importe ingresado por un pasaje de un pasajero sexo f.
Pedir datos por prompt y mostrar por document.write o console.log



*/
function mostrar()
{
	var contadorIteracciones;
	var nombre;
	var asiento;
	var importe;
	var sexo;
	var edad;
	var ultimoImporte;
	var ultimoNombre;
	var banderaUltima;
	var ultimoAsiento;
	var contadorMujeres;
	var promedio;
	var banderaMax;
	var MaximoImporteNB;
	var banderaMinima;
	var MinimoImporteF;
	var contadorMujeresIndi;

	banderaUltima = "Ult";
	banderaMax = "Max";
	banderaMinima = "Min";

	contadorIteracciones = 0;
	contadorMujeres = 0;
	contadorMujeresIndi = 0;

	while(contadorIteracciones < 5)
	{
		nombre = prompt("Ingrese su nombre");



		asiento = prompt("Ingrese su asiento");
		asiento = parseInt(asiento);

		while(isNaN(asiento))
		{
			asiento = prompt("ERROR, caracter invalido. Ingrese un numero");
			asiento = parseInt(asiento);
		}

		while(asiento < 1 || asiento > 100)
		{
			asiento = prompt("ERROR, Asiento no encontrado. Ingrese su asiento");
			asiento = parseInt(asiento);
		}



		importe = prompt("Ingrese su pasaje");
		importe = parseInt(importe);

		while(isNaN(importe))
		{
			importe = prompt("ERROR, caracter de importe invalido. Ingrese un numero");
			importe = parseInt(importe);
		}
		while(importe < 0 || importe > 300000)
		{
			importe = prompt("ERROR, importe no valido. Ingrese su importe");
			importe = parseInt(importe);
		}

		sexo = prompt("ingrese su genero");
		sexo = sexo.toLowerCase();

		while(sexo != "femenino" && sexo != "masculino" && sexo != "no binario")
		{
			sexo = prompt("ERROR, genero no encontrado. Ingrese genero");
			sexo = sexo.toLowerCase();
		}

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while(isNaN(edad))
		{
			edad = prompt("ERROR, caracter de edad invalido. Ingrese un numero");
			edad = parseInt(edad);
		}
		while(edad < 0 || edad > 100)
		{
			edad = prompt("ERROR, edad no valido. Ingrese su edad");
			edad = parseInt(edad);
		}
		//B
		if(sexo == "femenino")
		{
			contadorMujeres = contadorMujeres + edad;
			contadorMujeresIndi = contadorMujeresIndi + 1;
		}

		if(sexo =="no binario")
		{
			if(banderaMax == "Max")
			{
				MaximoImporteNB = importe;
				banderaMax = "No mas."
			}
			else
			{
				MaximoImporteNB = importe;
			}
		}

		if(sexo =="femenino")
		{
			if(banderaMinima == "Min")
			{
				MinimoImporteF = importe;
				banderaMinima = "Nonomas";
			}
			else
			{
				MinimoImporteF = importe;
			}
		}






	
		contadorIteracciones = contadorIteracciones + 1;

	}
	//A
	ultimoNombre = nombre;
	ultimoImporte = importe;
	ultimoAsiento = asiento;

	promedio = contadorMujeres / contadorMujeresIndi;

	document.write("El ultimo nombre del ultimo asiento registrado es " + ultimoNombre + ", su importe es " + ultimoImporte + " y su asiento es " + ultimoAsiento);

	document.write("<br> La edad promedio de las mujeres son " + promedio);

	document.write("<br> El maximo importe realizado por una persona de genero No Binaria es " + MaximoImporteNB);

	document.write("<br> El minimo importe realizado por una persona de genero Femenina es " + MinimoImporteF);


}















/*
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var bandera;
	var mayorTemp;
	var NombreMayorTemp;
	var contadorMayorEdadViudos;
	var contadorHombresSolterosViudos;
	var contadorViejosFiebre;
	var promedioEdad;
	var contadorEdad;
	var contadorHombresSolteros;
	var respuesta;

	bandera = "Primero";

	respuesta = "si";



	contadorHombresSolteros = 0;
	contadorHombresSolterosViudos = 0;
	contadorMayorEdadViudos = 0;
	contadorViejosFiebre = 0;
	contadorEdad = 0;

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while(isNaN(edad))
		{
			edad = prompt("ERROR, ingrese su edad en numeros");
			edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su genero");
		sexo = sexo.toLowerCase();

		while(sexo != "femenino" && sexo != "masculino")
		{
			sexo = prompt("ERROR, ingrese su genero");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Ingrese su estado civil");
		estadoCivil = estadoCivil.toLowerCase();

		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("ERROR, Ingrese su estado civil");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = prompt("ERROR, Ingrese su temperatura corporal");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}
		

		if(bandera == "Primero")
		{
			NombreMayorTemp = nombre;
			mayorTemp = temperaturaCorporal;

			bandera = "Ya no";
		}

		if(temperaturaCorporal > mayorTemp)
		{
			mayorTemp = temperaturaCorporal;
			NombreMayorTemp = nombre;
		}
		
		if(edad > 18 && estadoCivil == "viudo")
		{
			contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
		}
		else
		{
			if(sexo == "masculino" && estadoCivil == "soltero" && estadoCivil == "viudos")
			{
				contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
			}
		}
		if(edad >= 60 && temperaturaCorporal >= 38)
		{
			contadorViejosFiebre = contadorViejosFiebre + 1;
		}

		if(sexo == "masculino")
		{
			contadorHombresSolteros = contadorHombresSolteros + 1;
			contadorEdad = contadorEdad + edad;

		}		

		respuesta = prompt("Desea continuar?")


	}

	promedioEdad = contadorEdad / contadorHombresSolteros;


	document.write("El nombre de la persona con mayor temperatura es  " + NombreMayorTemp);

	document.write("<br> La cantidad de mayores de edad viudos es " + contadorMayorEdadViudos);
	
	document.write("<br> La cantidad de hombres solteros/viudos " + contadorHombresSolterosViudos);
	
	
	
	document.write("<br> Cuantas personas de la tercera edad tienen fiebre " + contadorViejosFiebre);
	
	document.write("<br> El promedio de edad de los hombres solteros es " + promedioEdad);


*/









































/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa deberá mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.

Sabiendo que:

*Si no tiene hijos no le corresponde asignación familiar
*Si tiene un hijo le corresponde 5000
*Si tiene dos hijos le corresponde 8000 por sus dos hijos
*Y si tiene más de dos hijos le corresponde 10000

d. Mostrar el total de dinero que deberá pagar la PYME en concepto de asignaciones*/



/*var contadorIteraciones;
var nombreEmpleados;
var generoIngresado;
var contadorMasculino;
var contadorFemenino;
var contadorNoBinario;
var cantidadHijos;
var cantidadHijosMayor;
var porcentajeMasculino;
var porcentajeFemenino;
var porcentajeNoBinario;
var nombreNoBinarioCantidadHijos;
var nombreEmpleadoNoTieneHijos;
var bandera;
var asignacionesCero;
var asignacionUno;
var asignacionDos;
var asignacionMayor;
var acumuladorAsignaciones;

bandera = "Primero";

contadorIteraciones = 0;

acumuladorAsignaciones = 0;

asignacionesCero = 0;
asignacionUno = 5000;
asignacionDos = 8000;
asignacionMayor = 10000;
contadorMasculino = 0;
contadorFemenino = 0;
contadorNoBinario =0;
porcentajeMasculino = 0;
porcentajeFemenino = 0;
porcentajeNoBinario = 0;

while(contadorIteraciones < 10)
{
	nombreEmpleados = prompt("Ingrese su nombre y apellido");

	generoIngresado = prompt("Ingrese su genero");

	while(generoIngresado != "Femenino" && generoIngresado != "Masculino" && generoIngresado != "No Binario")
	{
		generoIngresado = prompt("Genero ingresado no valido, intente de vuelta");
	}

	cantidadHijos = prompt("Ingrese la cantidad de hijos");
	cantidadHijos = parseInt(cantidadHijos);

	while(isNaN(cantidadHijos))
	{
		cantidadHijos = prompt("Dato incorrecto, ingrese un numero");
		cantidadHijos = parseInt(cantidadHijos);
	}

	while(cantidadHijos<0)
	{
		cantidadHijos = prompt("Numero no valido, ingrese un numero");
		cantidadHijos = parseInt(cantidadHijos);
	}

	if(bandera == "Primero")
	{
		cantidadHijosMayor = cantidadHijos;

		if(cantidadHijos == 0)
		{
			nombreEmpleadoNoTieneHijos = nombreEmpleados;
		}
		bandera = "Ya no";
	}
	else
	{
		if(cantidadHijos > cantidadHijosMayor)
		{
			cantidadHijosMayor = cantidadHijos;

			if(generoIngresado == "No Binario")
			{
				nombreNoBinarioCantidadHijos = nombreEmpleados;
			}

		}
	}


	//Contadores Genero
	if(generoIngresado == "Femenino")
	{
		contadorFemenino = contadorFemenino + 1;
	}
	else
	{
		if(generoIngresado == "Masculino")
		{
			contadorMasculino = contadorMasculino + 1;
		}
		else
		{
			if(generoIngresado == "No Binario")
			{
				contadorNoBinario = contadorNoBinario + 1;
			}
		}
	}

	//Asignaciones
	if(cantidadHijos == 0)
	{
		acumuladorAsignaciones = acumuladorAsignaciones + asignacionesCero;
	}
	else
	{
		if(cantidadHijos == 1)
		{
			acumuladorAsignaciones = acumuladorAsignaciones + asignacionUno;
		}
		else
		{
			if(cantidadHijos == 2)
			{
				acumuladorAsignaciones = acumuladorAsignaciones + asignacionDos;
			}
			else
			{
				if(cantidadHijos > 3)
				{
					acumuladorAsignaciones = acumuladorAsignaciones + asignacionMayor;
				}
			}
		}
	}

	contadorIteraciones = contadorIteraciones + 1;
}

porcentajeMasculino = contadorMasculino * 100 / 10;
porcentajeFemenino = contadorFemenino * 100 / 10;
porcentajeNoBinario = contadorNoBinario * 100 / 10;

document.write("El porcentaje de personas masculinas es " + porcentajeMasculino);

document.write("<br> El porcentaje de personas femeninas es " + porcentajeFemenino);

document.write("<br> El porcentaje de personas no binaria es " + porcentajeNoBinario);



document.write("<br> El nombre de la persona No Binaria es " + nombreNoBinarioCantidadHijos);

document.write("<br> El nombre y apellido de la primera persona que no tiene hijos es  " + nombreEmpleadoNoTieneHijos);

document.write("<br> El total de asignaciones que debe pagar la empresa es " + acumuladorAsignaciones);*/