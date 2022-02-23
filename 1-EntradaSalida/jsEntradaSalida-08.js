/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var dividiendo
	var numeroFinal;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;

	dividiendo = document.getElementById("txtIdNumeroDivisor").value;

	numeroFinal = dividendo / dividiendo;

	alert("La operacion da como resultado " + numeroFinal);



}


/*var dividiendo;
var divisor;
var resultado;

dividiendo = document.getElementById("txtIdNumeroDividendo").value;

dividiendo = parseInt(dividiendo);

divisor = document.getElementById("txtIdNumeroDivisor").value;

divisor = parseInt(divisor)

resultado = dividiendo / divisor;

alert("Lo que queda es " + resultado);*/