/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero = document.getElementById("txtIdNumeroUno").value;

	primerNumero = parseInt(primerNumero);

	//El parseInt transforma el string en un numero

	segundoNumero = document.getElementById("txtIdNumeroDos").value;

    segundoNumero = parseInt(segundoNumero);

	//Se suman,restan,multiplican,dividen con el signo entremedio de los dos
	
	resultado = primerNumero + segundoNumero;

	alert("La suma es " + resultado);
}

