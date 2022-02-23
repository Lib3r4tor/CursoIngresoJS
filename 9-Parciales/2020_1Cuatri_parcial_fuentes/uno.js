/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/
function mostrar()
{
	//Variables declaradas
    var precioIngresado;
    var articuloIngresado;
    var contadorproductos;
    var precioParseado;
    var marcaProducto;
    var precioArticuloBarato;
	var precioMinimo;
	var precioMaximo;
    var fabricanteProducto;
    var cantidadTotal;
    var cantidadUnidades;
    var acumulador;
    var promedio;
    var bandera;
	var unidadJabon;
	var cantidadParseado;
	var cantidadBarato;
	var marcaBarato;
	var cantidadMinima;
	var cantidadMaxima;
	var marcaMayorUnidad;

	//Operaciones declaradas
	contadorproductos = 0;

    bandera = "Es la primera vuelta"

    acumulador = 0;

    promedioDivision = 2

	//Ejercicio
	while(contadorproductos<5)
    {
		articuloIngresado = prompt ("Ingrese su producto (barbijo, jabon, alcohol");

		while(articuloIngresado != "barbijo" && articuloIngresado != "jabon" && articuloIngresado != "alcohol")
        {
            alert("Sin stock.");
    
            articuloIngresado = prompt("Ingrese su producto (barbijo, jabon, alcohol");
		}
		//Ingreso de marcas y fabricante
		marcaProducto = prompt("Ingrese la marca del producto");

		fabricanteProducto = prompt("Ingrese el fabricante ");

		//Cantidades ingresadas
		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadParseado = parseInt(cantidadUnidades);

		while(isNaN(cantidadParseado))
		{
			cantidadUnidades = prompt("Dato incorrecto, ingrese un numero");
			cantidadParseado = parseInt(cantidadUnidades);
		}

		//Ingreso de precios
		precioIngresado = prompt("Ingrese el precio del producto");
		precioParseado = parseInt(precioIngresado);

        while(isNaN(precioParseado) || precioParseado > 300 || precioParseado < 100)
		{
			precioIngresado = prompt("Dato incorrecto, ingrese un numero entre 100 y 300.");
			precioParseado = parseInt(precioIngresado);
		}
		//Limite de unidades
		while(cantidadParseado < 0 || cantidadParseado > 1000)
        {
            alert("Cantidades no validas, intente de nuevo.");

            precioParseado = prompt("Ingrese su cantidad pedida");
        }
		//Suma de precios
		acumulador += precioParseado;

		//Precios y cantidades 
        if(bandera == "Es la primera vuelta")
        {
            precioMinimo = precioParseado;

            precioMaximo = precioParseado;

			cantidadMinima = cantidadParseado;

			cantidadMaxima = cantidadParseado;

            bandera = "Ya no es la primera vuelta"
        }
        else
        {
            if(precioParseado > precioMaximo)
            {
                precioMaximo = precioParseado;
            }
            else
            {
                if(precioParseado < precioMinimo)
                {
                    precioMinimo = precioParseado;
                }
            }
        }
		if(cantidadParseado > cantidadMaxima)
		{
			cantidadMaxima = cantidadParseado;
		}
		else
		{
			if(cantidadParseado < cantidadMinima)
			{
				cantidadMinima = cantidadParseado;
			}
		}
		//Punto A
		/*if(articuloIngresado == "alcohol" && precioMinimo == precioParseado)
		{
			precioArticuloBarato = precioMinimo;
			cantidadBarato = cantidadParseado;
			marcaBarato = marcaProducto;
		}*/
		switch(articuloIngresado){
			case "alcohol":

					precioArticuloBarato = precioParseado;
					cantidadBarato = cantidadParseado;
					marcaBarato = marcaProducto;

					if(precioParseado<precioArticuloBarato)
					{
						precioArticuloBarato = precioParseado;
						cantidadBarato = cantidadParseado;
						marcaBarato = marcaProducto;
					}

			break;
			case "barbijo":

			break;
			case "jabon":

			break;
		}
		//Punto B
		
		if(cantidadMaxima == cantidadParseado)
		{
			cantidadTotal = cantidadParseado;
			marcaMayorUnidad = articuloIngresado;
			promedio = acumulador / promedioDivision;
		}
		
		//Punto C
		if(articuloIngresado == "jabon")
		{
			unidadJabon = cantidadParseado;
		}


		contadorproductos = contadorproductos + 1;
	}

	
	alert("El precio del alcohol mas barato es " + precioArticuloBarato + "$ Su cantidad pedida fue de " + cantidadBarato + " unidades y el fabricante es " + marcaBarato + ". El articulo con mas unidades fue " + marcaMayorUnidad + " y su promedio es " + promedio + " y hay " + unidadJabon + " unidades de jabones en total")

}

