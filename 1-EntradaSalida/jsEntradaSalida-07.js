/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = document.getElementById("txtIdNumeroUno").value;

	primerNumero = parseInt(primerNumero);

	segundoNumero = document.getElementById("txtIdNumeroDos").value;

    segundoNumero = parseInt(segundoNumero);

	resultado = primerNumero + segundoNumero;


	alert("La suma da resultado a " + resultado);	
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

   primerNumero = document.getElementById("txtIdNumeroUno").value;

   primerNumero = parseInt(primerNumero);

   segundoNumero = document.getElementById("txtIdNumeroDos").value;

   segundoNumero = parseInt(segundoNumero);

   resultado = primerNumero - segundoNumero;
 
   alert("El resultado de la resta es " + resultado)
	
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var resultado;

   primerNumero = document.getElementById("txtIdNumeroUno").value;

   primerNumero = parseInt(primerNumero);

   segundoNumero = document.getElementById("txtIdNumeroDos").value;

   segundoNumero = parseInt(segundoNumero);

   resultado = primerNumero * segundoNumero;

	alert("El resultado de la multiplicacion es " + resultado);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

   primerNumero = document.getElementById("txtIdNumeroUno").value;

   primerNumero = parseInt(primerNumero);

   segundoNumero = document.getElementById("txtIdNumeroDos").value;

   segundoNumero = parseInt(segundoNumero);

   resultado = primerNumero / segundoNumero;

	alert("El resultado de la division es " + resultado);
}

