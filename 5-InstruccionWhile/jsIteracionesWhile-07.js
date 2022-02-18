/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
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

}//FIN DE LA FUNCIÓN