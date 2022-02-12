function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado =txtIdDestino.value;
	var precio;
	var porcentajeDelVeinte;
	var porcentajeDelDiez;
	var precioConPorcentajeDelVeinte;
	var precioConPorcentajeDelDiez;
	var precioConAumentoDelDiez;
	var precioConDescuentoDelDiez;
	var precioConAumentoDelVeinte;
	var precioConDescuentoDelVeinte;

	//Precios y porcentajes
	precio = 15000

	porcentajeDelDiez = 10 / 100

	porcentajeDelVeinte = 20 / 100

	//Descuentos y aumentos

	precioConPorcentajeDelDiez = precio * porcentajeDelDiez;

	precioConPorcentajeDelVeinte = precio * porcentajeDelVeinte;

	precioConAumentoDelDiez = precio + precioConPorcentajeDelDiez;

	precioConAumentoDelVeinte = precio + precioConPorcentajeDelVeinte;

	precioConDescuentoDelDiez = precio - precioConPorcentajeDelDiez;

	precioConDescuentoDelVeinte = precio - precioConPorcentajeDelVeinte


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("El precio es con aumento es " + precioConAumentoDelVeinte);
					break;
				case "Cataratas":
		
				case "Cordoba":
					alert("El precio con descuento es " + precioConDescuentoDelDiez);
					break;
				case "Mar del plata":
					alert("El precio con descuento de " + precioConDescuentoDelVeinte);
					break;
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("El precio es con descuento es " + precioConDescuentoDelVeinte);
					break;
				case "Cataratas":
		
				case "Cordoba":
					alert("El precio con aumento es " + precioConAumentoDelDiez);
					break;
				case "Mar del plata":
					alert("El precio con aumento de " + precioConAumentoDelVeinte);
					break;
			}
		break;
		case "Otoño":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("El precio es con aumento es " + precioConAumentoDelDiez);
					break;
				case "Cataratas":
					alert("El precio con aumento es " + precioConAumentoDelDiez)
				case "Cordoba":
					alert("El precio es " + precio);
					break;
				case "Mar del plata":
					alert("El precio con aumento de " + precioConAumentoDelDiez);
					break;
			}
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
					alert("El precio es con aumento es " + precioConAumentoDelDiez);
					break;
				case "Cataratas":
					alert("El precio con aumento es " + precioConAumentoDelDiez)
				case "Cordoba":
					alert("El precio es " + precio);
					break;
				case "Mar del plata":
					alert("El precio con aumento de " + precioConAumentoDelDiez);
					break;
			}
		

	}

}//FIN DE LA FUNCIÓN