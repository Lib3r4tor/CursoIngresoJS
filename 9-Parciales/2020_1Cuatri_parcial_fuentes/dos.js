/*
Ejercicio parcial 2
Ivan Gonzalez Div H
2-Nos ingresan una cantidad indeterminada de alumnos inscriptos en programación 1,
validando los datos ingresados:

División [A,B, C] ,nombre del alumno ,legajo [del 1 al 10000] , si es recursante o no y nota.
informar:
a)La división con más aspirantes.
b)el nombre recursante con mayor nota
c)el nombre del que No es recursante y tiene  la menor nota.
Pedir datos por prompt y mostrar por document.write o console.log




*/



function mostrar() 
{
	var respuesta;
	var divisionIngresada;
	var nombreAlumno;
	var legajoIngresadp;
	var recursante;
	var notaIngresada;
	var bandera;
	var contadorAspirantesA;
	var nombreMenorNota;
	var mayorNota;
	var menorNota;
	var contadorAspirantesB;
	var contadorAspirantesC;
	var recursanteMayorNota;
	var mayorDivision;


	bandera = "Primera";

	contadorAspirantesA = 0;
	contadorAspirantesB = 0;
	contadorAspirantesC = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		nombreAlumno = prompt("Ingrese su nombre");




		legajoIngresadp = prompt("Ingrese su legajo");
		legajoIngresadp = parseInt(legajoIngresadp);

		while(isNaN(legajoIngresadp))
		{	
		legajoIngresadp = prompt("Ingrese el numero de legajo");
		legajoIngresadp = parseInt(legajoIngresadp);
		}
		while(legajoIngresadp > 10000)
		{
			legajoIngresadp = prompt("Ingrese el numero valido de legajo");
			legajoIngresadp = parseInt(legajoIngresadp);
		}
		while(legajoIngresadp < 0)
		{
			legajoIngresadp = prompt("Ingrese el numero valido de legajo");
			legajoIngresadp = parseInt(legajoIngresadp);
		}


		divisionIngresada = prompt("Ingrese su division");
		divisionIngresada = divisionIngresada.toLowerCase();

		while(divisionIngresada != "a" && divisionIngresada != "b" && divisionIngresada != "c")
		{
			divisionIngresada = prompt("Division INVALIDA, ingrese su division");
			divisionIngresada = divisionIngresada.toLowerCase();
		}

		recursante = prompt("Es recursante?");
		recursante = recursante.toLowerCase();

		while(recursante != "si" && recursante != "no")
		{
			recursante = prompt("Responda, eres recursante?");
			recursante = recursante.toLowerCase();
		}

		notaIngresada = prompt("Ingrese su nota");
		notaIngresada = parseInt(notaIngresada);

		while(isNaN(notaIngresada))
		{
			notaIngresada = prompt("ERROR,Ingrese numero");
			notaIngresada = parseInt(notaIngresada);
		}

		while(notaIngresada > 10)
		{
			notaIngresada = prompt("Ingrese el numero valido de nota");
			notaIngresada = parseInt(notaIngresada);
		}

		while(notaIngresada < 0)
		{
			notaIngresada = prompt("Ingrese el numero valido de nota");
			notaIngresada = parseInt(notaIngresada);
		}

		if(bandera == "Primera")
		{
			mayorNota = notaIngresada;


			menorNota = notaIngresada;

			bandera = "Ya no"

		}
		else
		{
			if(notaIngresada > mayorNota)
			{
				notaIngresada = notaIngresada;
				if(recursante == "si")
				{
					recursanteMayorNota = nombreAlumno;
				}
			}
			else
			{
				if(notaIngresada < menorNota)
				{
					menorNota = notaIngresada;
					if(recursante == "no")
					{
						nombreMenorNota = nombreAlumno;
					}
				}
			}
		}

		switch(divisionIngresada)
		{
			case "a":
				contadorAspirantesA = contadorAspirantesA + 1;
				break;

			case "b":
				contadorAspirantesB = contadorAspirantesB + 1;
				break;

			case "c":
				contadorAspirantesC = contadorAspirantesC + 1;
		}


		if(contadorAspirantesA > contadorAspirantesB && contadorAspirantesA > contadorAspirantesC)
		{
			mayorDivision = "Division A"
		}

		if(contadorAspirantesB > contadorAspirantesA && contadorAspirantesB > contadorAspirantesC)
		{
			mayorDivision = "Division B"
		}
		if(contadorAspirantesC > contadorAspirantesB && contadorAspirantesC > contadorAspirantesA)
		{
			mayorDivision = "Division C"
		}


		respuesta = prompt("Desea continuar?");
		respuesta = respuesta.toLowerCase();


	}


		document.write("<br> La division con la mayor cantidad de alumnos es " + mayorDivision);

		document.write("<br> El nombre recursante con mayor nota es " + recursanteMayorNota);

		document.write("<br> El nombre del que No es recursante y tiene  la menor nota es " + nombreMenorNota)


		
		




}







































/*	var alturas;
	var edad;
	var temperatura;
	var sexoIngresado;
	var nota;
	var nombre;
	var respuesta;
	var contadorFemenino;
	var contadorFiebre;
	var contadorNoFiebre;
	var promedioMasculino;
	var promedioFemenino;
	var promedioNoBinario;
	var contadorIteracciones;
	var contadorMasculino;
	var contadorNoBinario;
	var bandera;
	var edadMin;
	var primeraprobado;
	var maxTemp;
	var nombreMaxTemp;
	var edadMaxTemp;
	var alturaNoBinarioJoven;
	var notaNoBinarioJoven;
	var nombreMujerAltaAprobada;
	var maxAltura;
	var contadorDesaprobados;
	var porcentajeDesaprobados;
	var nombreHombreBajoDesaprobado;

	bandera = "Primer";


	respuesta = "si";

	contadorFemenino = 0;
	contadorMasculino = 0;
	contadorNoBinario = 0;
	contadorFiebre = 0;
	contadorNoFiebre = 0;
	contadorIteracciones = 0;
	contadorDesaprobados = 0;

	while (respuesta == "si") {
		alturas = prompt("Ingrese su altura");
		alturas = parseInt(alturas);

		while (isNaN(alturas)) {
			alturas = prompt("ERROR, Ingrese su altura");
			alturas = parseInt(alturas);
		}

		while (alturas < 0) {
			alturas = prompt("ERROR, Ingrese su altura valida.");
			alturas = parseInt(alturas);
		}
		while (alturas > 250) {
			alturas = prompt("ERROR, Ingrese su altura valida.");
			alturas = parseInt(alturas);
		}

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		while (isNaN(edad)) {
			edad = prompt("ERROR, Ingrese su edad");
			edad = parseInt(edad);
		}

		while (edad < 18) {
			edad = prompt("ERROR, Ingrese su edad valida.");
			edad = parseInt(edad);
		}
		while (edad > 80) {
			edad = prompt("ERROR, Ingrese su edad valida.");
			edad = parseInt(edad);
		}

		temperatura = prompt("Ingrese su temperatura");
		temperatura = parseInt(temperatura);

		while (temperatura < 25) {
			temperatura = prompt("ERROR, Ingrese su temperatura valida.");
			temperatura = parseInt(temperatura);
		}
		while (temperatura > 50) {
			temperatura = prompt("ERROR, Ingrese su temperatura valida.");
			temperatura = parseInt(temperatura);
		}


		while (isNaN(temperatura)) {
			temperatura = prompt("ERROR, Ingrese su temperatura");
			temperatura = parseInt(temperatura);
		}

		sexoIngresado = prompt("Ingrese su genero");
		sexoIngresado = sexoIngresado.toLowerCase();

		while (sexoIngresado != "masculino" && sexoIngresado != "femenino" && sexoIngresado != "no binario") {
			sexoIngresado = prompt("ERROR, Ingrese su genero");
			sexoIngresado = sexoIngresado.toLowerCase();
		}

		nota = prompt("Ingrese su nota");
		nota = parseInt(nota);

		while (isNaN(nota)) {
			nota = prompt("ERROR, Ingrese su nota");
			nota = parseInt(nota);
		}
		while (nota < 0) {
			nota = prompt("ERROR, Ingrese su nota valida.");
			nota = parseInt(nota);
		}
		while (nota > 10) {
			nota = prompt("ERROR, Ingrese su nota valida.");
			nota = parseInt(nota);
		}

		nombre = prompt("Ingrese su nombre");

		if (bandera == "Primer") {
			edadMax = edad;
			maxTemp = temperatura;
			nombreMaxTemp = nombre;
			edadMaxTemp = edad;
			maxAltura = alturas;
			nombreMujerAltaAprobada = nombre;

			edadMin = edad;
			alturaNoBinarioJoven = alturas;
			notaNoBinarioJoven = nota;

			nombreHombreBajoDesaprobado = nombre;

			// punto D
			if (nota >= 6) {
				primeraprobado = nombre;
			}

			if (nota <= 5 && sexoIngresado == "masculino" && alturas < 160) {
				nombreHombreBajoDesaprobado = nombre;
			}

			bandera = "Ya no";
		}
		//punto E
		if (temperatura > maxTemp) {
			maxTemp = temperatura;
			nombreMaxTemp = nombre;
			edadMaxTemp = edad;
		}
		//punto C / A
		switch (sexoIngresado) {
			case "femenino":
				contadorFemenino = contadorFemenino + 1;
				break;
			case "masculino":
				contadorMasculino = contadorMasculino + 1;
				break;
			case "no binario":
				contadorNoBinario = contadorNoBinario + 1;
				break;
		}

		// punto D
		if (nota >= 6) {
			primeraprobado = nombre;
		}

		if (nota <= 5 && sexoIngresado == "masculino" && alturas < 160) {
			nombreHombreBajoDesaprobado = nombre;
		}

		bandera = "Ya no";
	}
	// Punto H
	if (nota < 6) {
		contadorDesaprobados = contadorDesaprobados + 1;
	}
	// punto F
	if (sexoIngresado == "no binario") {
		if (edad < edadMin) {
			edadMin = edad;
			alturaNoBinarioJoven = alturas;
			notaNoBinarioJoven = nota;
		}
	}
	else {   // punto G
		if (sexoIngresado == "femenino") {
			if (alturas > maxAltura && nota > 6) {
				nombreMujerAltaAprobada = nombre;
			}
		}
	}
	//punto B
	if (temperatura > 38) {
		contadorFiebre = contadorFiebre + 1;
	}
	else {
		if (temperatura < 38) {
			contadorNoFiebre = contadorNoFiebre + 1;
		}
	}




	contadorIteracciones = contadorIteracciones + 1


	respuesta = prompt("Desea continuar?");


	// punto H
	porcentajeDesaprobados = contadorDesaprobados * 100 / contadorIteracciones;

	// punto C
	promedioMasculino = contadorMasculino / contadorIteracciones;
	promedioFemenino = contadorFemenino / contadorIteracciones;
	promedioNoBinario = contadorNoBinario / contadorIteracciones;


	document.write("La cantidad de mujeres son " + contadorFemenino);

	document.write("<br> La cantidad de alumnos con fiebres son " + contadorFiebre);

	document.write("<br> la cantidad de alumnos sin fiebre son " + contadorNoFiebre);



	document.write("<br> El promedio de sexo masculino es  " + promedioMasculino);

	document.write("<br> El promedio de sexo femenino es  " + promedioFemenino);

	document.write("<br> El promedio de sexo No Binario es  " + promedioNoBinario);





	document.write("<br> El primer alumno aprobado es  " + primeraprobado);
	document.write("<br> El nombre y edad que tiene la maxima temperatura es " + nombreMaxTemp + " y su edad es " + edadMaxTemp);
	document.write("<br> ")


	document.write("<br> El nombre de la mujer mas alta que ha aprobado " + nombreMujerAltaAprobada);
	document.write("<br> El porcentaje de personas que aprobado sobre el total " + porcentajeDesaprobados);
	document.write("<br> El nombre del primer bajo que desaprobo " + nombreHombreBajoDesaprobado);

*/


















/*
	var productoIngresado;
	var cantidadBolsas;
	var precioBolsas;
	var porcentaje;
	var importeTotal;
	var importeTotalDescuento;
	var importeTotalAplicado;
	var productoMasUnidades;
	var nombreMasUnidades;
	var productoCaro;
	var nombreProductoCaro;
	var respuesta;
	var bandera;

	bandera = "Primero";

	respuesta = "si";

	importeTotal = 0;

	porcentaje = 0;

	while(respuesta == "si")
	{
		productoIngresado = prompt("Ingrese su bolsa de construccion");
		productoIngresado = productoIngresado.toLowerCase();

		while(productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento")
		{
			productoIngresado = prompt("Producto no valido, ingrese la bolsa de construccion");
			productoIngresado = productoIngresado.toLowerCase();
		}

		cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
		cantidadBolsas = parseInt(cantidadBolsas);

		while(isNaN(cantidadBolsas))
		{
			cantidadBolsas = prompt("ERROR, ingrese un numero");
			cantidadBolsas = parseInt(cantidadBolsas);
		}

		while(cantidadBolsas < 0 )
		{
			cantidadBolsas = prompt("Valor incorrecto, ingrese un valor valido");
			cantidadBolsas = parseInt(cantidadBolsas);
		}

		precioBolsas = prompt("Ingrese el precio de las bolsas");
		precioBolsas = parseInt(precioBolsas);

		importeTotal = importeTotal + precioBolsas;

		while(isNaN(precioBolsas))
		{
			precioBolsas = prompt("ERROR, ingrese un numero");
			precioBolsas = parseInt(precioBolsas);
		}
		while(precioBolsas < 0 )
		{
			precioBolsas = prompt("Valor incorrecto, ingrese un valor valido");
			precioBolsas = parseInt(precioBolsas);
		}

		if(bandera == "Primero")
		{
			productoMasUnidades = cantidadBolsas;
			nombreMasUnidades = productoIngresado;

			productoCaro = precioBolsas
			nombreProductoCaro = productoIngresado;
			bandera = "Ya no";
		}

		if(cantidadBolsas > productoMasUnidades)
		{
			productoMasUnidades = cantidadBolsas;
			nombreMasUnidades = productoIngresado;
		}
		else
		{
			if(precioBolsas > productoCaro)
			{
				productoCaro = precioBolsas;
				nombreMasUnidades = productoIngresado;
			}
		}


		if(cantidadBolsas > 10)
		{
			porcentaje = 15;
		}
		else
		{
			if(cantidadBolsas > 30)
			{
				porcentaje = 25;
			}
		}

		importeTotalDescuento = importeTotal * porcentaje / 100;


		respuesta = prompt("Desea continuar?");
	}

	importeTotalAplicado = importeTotal - importeTotalDescuento;

	document.write("El importe total a pagar sin descuento es " + importeTotal);

	document.write("<br> El importe a pagar con descuento es " + importeTotalAplicado);

	document.write("<br> El tipo de producto con mas bolsas es " + nombreMasUnidades);



	document.write("<br> El tipo de producto mas caro es  " +  nombreProductoCaro);



*/





















/*
/*2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas hay):
*Nombre de vendedor (Juan, Pedro o María)
*Importe de la venta (numero positivo NO mayor que 10000)
Al terminar de cargar las planillas se debe calcular el total de la comisión por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendrá una
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comisión será del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comisión. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones*/





/*
var nombreVendedor;
var importeVenta;
var comisionAlta;
var comisionBaja;
var respuesta;
var importeTotalJuan;
var importeTotalMaria;
var importeTotalPedro;
var cantidadVentasJuan;
var cantidadVentasMaria;
var cantidadVentasPedro;
var comisionVendedorJuan;
var comisionVendedorMaria;
var comisionVendedorPedro;
var nombreVendedorMasDinero;
var cantidadVentasJuan;
var cantidadVentasMaria;
var cantidadVentasPedro;

respuesta = "si";

comisionAlta = 10 / 100;
comisionBaja = 5 / 100;

importeTotalJuan = 0;
importeTotalMaria = 0;
importeTotalPedro = 0;

comisionVendedorJuan = 0;
comisionVendedorMaria = 0;
comisionVendedorPedro = 0;

cantidadVentasJuan = 0;
cantidadVentasMaria = 0;
cantidadVentasPedro = 0;

	while(respuesta == "si")	
	{
		nombreVendedor = prompt("Ingrese su nombre");
		nombreVendedor = nombreVendedor.toLocaleUpperCase();

		while(nombreVendedor != "JUAN" && nombreVendedor != "MARIA" && nombreVendedor != "PEDRO")
		{
			nombreVendedor = prompt("Nombre no registrado, intente de vuelta");
			nombreVendedor = nombreVendedor.toLocaleUpperCase();
		}

		importeVenta = prompt("Ingrese su importe de venta");
		importeVenta = parseInt(importeVenta);

		while(isNaN(importeVenta))
		{
			importeVenta = prompt("Caracter no valido, intente de vuelta");
			importeVenta = parseInt(importeVenta);
		}
		while(importeVenta < 0 || importeVenta > 1000)
		{
			importeVenta = prompt("Importe invalido, reintente");
			importeVenta = parseInt(importeVenta);
		}

		if(nombreVendedor == "JUAN")
		{
			importeTotalJuan = importeTotalJuan + importeVenta;
			importeTotalJuan = parseInt(importeTotalJuan);
			cantidadVentasJuan = cantidadVentasJuan + 1;
		}
		else
		{
			if(nombreVendedor == "MARIA")
			{
				importeTotalMaria = importeTotalMaria + importeVenta;
				importeTotalMaria = parseInt(importeTotalMaria);
				cantidadVentasMaria = cantidadVentasMaria + 1;

			}
			else
			{
				if(nombreVendedor == "PEDRO")
				{
					importeTotalPedro = importeTotalPedro + importeVenta;
					importeTotalPedro = parseInt(importeTotalPedro);
					cantidadVentasPedro = cantidadVentasPedro + 1;

			}	}
		}

		if(comisionVendedorJuan > comisionVendedorMaria && comisionVendedorJuan > comisionVendedorPedro)
		{
			nombreVendedorMasDinero = "Juan";
		}
		else
		{
			if(comisionVendedorPedro > comisionVendedorJuan && comisionVendedorPedro > comisionVendedorMaria)
			{
				nombreVendedorMasDinero = "Pedro";
			}
			else
			{
				if(comisionVendedorMaria > comisionVendedorJuan && comisionVendedorMaria > comisionVendedorPedro)
				{
					nombreVendedorMasDinero = "Maria";
				}
			}
		}

		respuesta = prompt("Desea continuar?");

	}

	if(importeTotalJuan > 500000)
	{
		comisionVendedorJuan = importeTotalJuan * comisionAlta;
	}
	else
	{
		if(importeTotalJuan < 500000)
		{
			comisionVendedorJuan = importeTotalJuan * comisionBaja;
		}
	}
	if(importeTotalMaria > 500000)
	{
		comisionVendedorMaria = importeTotalMaria * comisionAlta;
	}
	else
	{
		if(importeTotalMaria < 500000)
		{
			comisionVendedorMaria = importeTotalMaria * comisionBaja;
		}
	}	

	if(importeTotalPedro > 500000)
	{
		comisionVendedorPedro = importeTotalPedro * comisionAlta;
	}
	else
	{
		if(importeTotalPedro < 500000)
		{
			comisionVendedorPedro = importeTotalPedro * comisionBaja;
		}
	}	
		


	document.write("El importe total de Juan es  " + importeTotalJuan);

	document.write("<br> La cantidad de ventas que hizo Juan es  " + cantidadVentasJuan);

	document.write("<br> La cantidad de comision que hizo Juan es " + comisionVendedorJuan);



	document.write("<br> El importe total de Pedro es  " + importeTotalPedro);

	document.write("<br> La cantidad de ventas que hizo Pedro es  " + cantidadVentasPedro);

	document.write("<br> La cantidad de comision que hizo Pedro es " + comisionVendedorPedro);



	document.write("<br> El importe total de Maria es  " + importeTotalMaria);

	document.write("<br> La cantidad de ventas que hizo Maria es  " + cantidadVentasMaria);

	document.write("<br> La cantidad de comision que hizo Maria es " + comisionVendedorMaria);




	document.write("<br> El nombre del vendedor que recaudo mas dinero es  " + nombreVendedorMasDinero);*/



