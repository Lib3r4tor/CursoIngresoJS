/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
var productoUno;
var precioProductoUno;
var productoDos;
var precioProductoDos;
var productoTres;
var precioProductoTres;
var precioBruto;
var promedio;
var precioFinal;
var descuentoPedido;
var impuesto;
var descuento;
var precioConDescuento;

		//Toma de datos del primer producto

	productoUno = prompt("Ingrese el nombre del producto");

	precioProductoUno = prompt("Ingrese el precio del producto");

	precioProductoUno = parseInt(precioProductoUno);

		//Toma de datos del segundo producto

	productoDos = prompt("Ingrese el nombre del segundo producto");

	precioProductoDos = prompt("Ingrese el precio del segundo precio");

	precioProductoDos = parseInt(precioProductoDos);

		//Toma de datos del tercer producto

	productoTres = prompt("Ingrese el nombre del tecer producto");

	precioProductoTres = prompt("Ingrese el precio del tercer producto");

	precioProductoTres = parseInt(precioProductoTres)

		//Toma del descuento pedido

	descuentoPedido = prompt("Ingrese su descuento pedido");

	descuentoPedido = parseInt(descuentoPedido);

		//Operaciones

	precioBruto = precioProductoUno + precioProductoDos + precioProductoTres;

	promedio = precioBruto / 3;

	impuesto = precioBruto * 0.21 ;

	descuento = precioBruto * descuentoPedido / 100;

	precioFinal = precioBruto + impuesto;

	precioConDescuento = precioBruto - descuento;



		alert("Este es el precio total sin impuestos " + precioBruto + "$ el promedio de los precios es " + promedio + ". El precio total con impuesto IVA es " + precioFinal + "$ y su precio con descuento es " + precioConDescuento + "$.");
}

