function mostrar()
{
	var contador;
	var acumulador;
	var numero
	var suma;

	numero = prompt("Ingrese los numeros");


	suma = 0
	contador = 0;
	acumulador= 0;

	while(contador<5)
	{
		numero = prompt("Ingrese los numeros");
		numero = parseInt(numero)
		acumulador= acumulador + numero;

		contador++

	}
	
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;
}//FIN DE LA FUNCIÓN