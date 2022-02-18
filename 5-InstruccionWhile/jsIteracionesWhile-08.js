/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	respuestaDos = 'si';

	numero = prompt("Ingrese un numero");

	while(respuesta != 'no')
	{
		//Numeros positivos
		numero = prompt("Ingrese los numeros");
		numero = parseInt(numero)

		if(numero>sumaPositivos)
		{
			sumaPositivos= sumaPositivos + numero;
		}
		//Numeros negativos
		else
		{ 
			if(numero<multiplicacionNegativos)
			{
				multiplicacionNegativos = multiplicacionNegativos * numero;
			}
		}
		contador ++;
		respuesta = prompt("Si ya no quiere ingresar numeros escriba 'no', si quieres seguir, ingrese cualquier tecla");	
	}

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN