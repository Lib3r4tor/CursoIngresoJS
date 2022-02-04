/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//ejercicio 9 bis, Pedir el porcentaje por prompt
	var sueldo;
	var aumento;
	var resultado;
	var aumentoPedido;
	//Se ingresa en el prompt el porcentaje requerido para el aumento

	aumentoPedido = prompt("Inserte su porcentaje en aumento");
	//se transforma el valor en numero

	aumentoPedido = parseInt(aumentoPedido);

	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);
	//Se hace el aumento poniendo la variable aumentoPedido dividiendo entre 100
	aumento = sueldo * aumentoPedido / 100;
	//luego se suma el sueldo inicial con los valores aumentados por ese porcentaje

	resultado = sueldo + aumento;
	
	//De modo que en el Resultado aparezca ya con el aumento aplicado

	document.getElementById("txtIdResultado").value = resultado;

	alert("Tu sueldo es de "+sueldo+ "$, pediste un aumento del "+ aumentoPedido+ "% lo cual da un aumento de "+aumento+ "$. Su sueldo final es "+ resultado+ "$");


	
	
}
