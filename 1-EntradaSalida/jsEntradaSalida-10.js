/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//ejercicio 10 bis, mostrar el importe con el descuento pedido (Se repite la misma operacion pero restando el descuento al importe)
	var importe;
	var descuento;
	var importeFinal;
	var descuentoPedido;

	descuentoPedido = prompt("Ingrese el descuento que desea tener");

	descuentoPedido = parseInt(descuentoPedido);


	importe = document.getElementById("txtIdImporte").value;

	importe = parseInt(importe);

	descuento = importe * descuentoPedido / 100;

	importeFinal = importe - descuento;

	//De modo que en el Resultado aparezca ya con el descuento aplicado

	document.getElementById("txtIdResultado").value = importeFinal;

	alert("Tu importe es "+importe+ "$, pediste un descuento del "+ descuentoPedido+ "% lo cual da un descuento de "+descuento+ "$. Su importe final es "+ importeFinal+ "$");

}
