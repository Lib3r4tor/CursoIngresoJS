/*
Ejercicio parcial 1
Ivan Gonzalez Div H
 1- Una casa de computación que se especializa en venta de insumos importados desea calcular ciertas métricas en base a las ventas de sus productos.

Se ingresa de cada venta: (Ingresa mínimo 5 ventas)
-Nombre del producto.
-Género: (Memorias – Discos – Motherboards)
-Tipo de Venta: (Online – Local)
-Importe: (No pueden ser números negativos ni mayor a los 30000)


Se pide:
A- El más barato de “Discos” con su importe.
B- De la venta más cara, el nombre del producto y tipo.
C- La cantidad de ventas que sean de “Memorias” y cuesten menos de $850. 




*/



function mostrar()
{
	var nombreProducto;
	var generoIngresado;
	var tipoVenta;
	var importe;
	var bandera;
	var contadorMemoriasBaratas;
	var discosBaratos;
	var nombreProductoCaro;
	var tipoProductoMasCarp;
	var contadorIteracciones;
  var importeCaro;
  var importeBarato;

	bandera = "Primera vuelta";

	contadorMemoriasBaratas = 0;

	contadorIteracciones = 0;

	while(contadorIteracciones < 3)
  {
    nombreProducto = prompt("Ingrese el nombre del producto");
    
    generoIngresado = prompt("Ingrese el tipo de producto");
    generoIngresado = generoIngresado.toLowerCase();

    while(generoIngresado != "memorias" && generoIngresado != "discos" && generoIngresado != "motherboard")
    {
      generoIngresado = prompt("Sin stock, ingrese tipo de producto");
      generoIngresado = generoIngresado.toLocaleLowerCase();
    }

    tipoVenta = prompt("Ingrese el tipo de venta");
    tipoVenta = tipoVenta.toLowerCase();

    while(tipoVenta != "online" && tipoVenta != "local")
    {
      tipoVenta = prompt("  ERROR, INGRESE EL TIPO DE VENTA");
      tipoVenta = tipoVenta.toLowerCase();
    }

    importe = prompt("Ingrese el importe");
    importe = parseInt(importe);

    while(isNaN(importe))
    {
      importe = prompt("ERROR, Ingrese el importe en numeros");
      importe = parseInt(importe);
    }

    while(importe > 30000)
    {
      importe = prompt("ERROR, Ingrese importe valido");
      importe = parseInt(importe);
    }
    while(importe < 0)
    {
      importe = prompt("ERROR, Ingrese importe valido");
      importe = parseInt(importe);
    }

    if(bandera == "Primera vuelta")
    {
      importeBarato = importe;
      discosBaratos = nombreProducto;
      


      importeCaro = importe;
      nombreProductoCaro = nombreProducto;
      tipoProductoMasCarp = tipoVenta;

      bandera = "Ya no"

    }
    else
    {
      if(importe < importeBarato)
      {
        importeBarato = importeBarato;
        discosBaratos = nombreProducto;
      }
        else
        {
          if(importe > importeCaro)
          {
           importeCaro = importe;
           nombreProductoCaro = nombreProducto;
           tipoProductoMasCarp = tipoVenta;
          }
       }
    }


    if(generoIngresado == "memorias" && importe < 850)
    {
      contadorMemoriasBaratas = contadorMemoriasBaratas + 1;
    }




    contadorIteracciones = contadorIteracciones + 1;
  }

  document.write("El nombre del Disco mas barato es " + discosBaratos);

  document.write("<br> El nombre del producto mas caro es  " + nombreProductoCaro + " y su tipo de venta es " + tipoProductoMasCarp);

  document.write("<br> La cantidad de discos que valen menos de 850$ " + contadorMemoriasBaratas);

  


  
}








/*
  var productosIngresados;
  var precioIngresado;
  var cantidadUnidades;
  var marcaUnidades;
  var fabricante;
  var precioMinimo;
  var masUnidades;
  var alchoholBarato;
  var alcoholUnidades;
  var alcoholFabricante;
  var bandera;
  var cantidadBarato;
  var fabricanteBarato;
  var tipoProductoMasUnidades;
  var promedioCompra;
  var unidadesJabon;
  var contadorIteracciones;
  var acumuladorImporte;

contadorIteracciones = 0;

bandera = "Primero";

acumuladorImporte = 0;

unidadesJabon = 0;


while(contadorIteracciones < 5)
{
  productosIngresados = prompt("Ingrese los productos");
  productosIngresados = productosIngresados.toLowerCase();

  while(productosIngresados != "barbijo" && productosIngresados != "jabon" && productosIngresados != "alcohol")
  {
    productosIngresados = prompt("Productos sin stock, intente de vuelta");
    productosIngresados = productosIngresados.toLowerCase();
  }

  precioIngresado = prompt("Ingreser el precio del prodcuto");
  precioIngresado = parseInt(precioIngresado);

  while(isNaN(precioIngresado))
  {
    precioIngresado = prompt("ERROR. ingrese un numero");
    precioIngresado = parseInt(precioIngresado);
  }

  while(precioIngresado < 100)
  {
    precioIngresado = prompt("ERROR. ingrese precio valido");
    precioIngresado = parseInt(precioIngresado);
  }
  while(precioIngresado > 300)
  {
    precioIngresado = prompt("ERROR. ingrese precio valido");
    precioIngresado = parseInt(precioIngresado);
  }

  cantidadUnidades = prompt("Ingrese la cantidad de unidades");
  cantidadUnidades = parseInt(cantidadUnidades);

  while(isNaN(cantidadUnidades))
  {
    cantidadUnidades = prompt("ERROR. ingrese un numero");
    cantidadUnidades = parseInt(cantidadUnidades);
  }

  while(cantidadUnidades < 0 && cantidadUnidades > 1000)
  {
    cantidadUnidades = prompt("ERROR. Ingrese cantidad valida.");
    cantidadUnidades = parseInt(cantidadUnidades);
  }

  marcaUnidades = prompt("Ingrese la marca del producto");

  fabricante = prompt("Ingrese el fabricante del producto");

  acumuladorImporte = acumuladorImporte + precioIngresado;

  if(bandera == "Primero")
  {
    precioMinimo = precioIngresado;

    masUnidades = cantidadUnidades;

    bandera = "Ya no es";
  }

  if(precioIngresado < precioMinimo)
  {
    precioMinimo = precioIngresado;

    if(productosIngresados == "alcohol")
    {
      alchoholBarato = marcaUnidades;
      
      alcoholUnidades = cantidadUnidades;

      alcoholFabricante = fabricante;
    }
  }

  if(cantidadUnidades > masUnidades)
  {
    masUnidades = cantidadUnidades;
    tipoProductoMasUnidades = productosIngresados;
  }


  if(productosIngresados == "jabon")
  {
    unidadesJabon = unidadesJabon + 1;
  }

  contadorIteracciones = contadorIteracciones + 1;
}

promedioCompra = acumuladorImporte / 5;

alert("La marca del alcohol mas barato es " + alchoholBarato + ". La cantidad pedida del alcohol es " + alcoholUnidades + " Y el fabricante es " + alcoholFabricante + ". El producto con mas unidades es " + tipoProductoMasUnidades + ". Y la cantidad de jabon es " + unidadesJabon);




*/



/*1. Se ingresan 5 importes, marca del producto y pías de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a. Mínimo importe con su pías
b. Máximo importe con su marca
c. Promedio importe
d. Cantidad de productos de China
e. Sobre el máximo encontrado aplicar un procentaje del 10% a dicho importe.
var importesIngresados;
var marcaIngresada;
var paisDeOrigenIngresado;
var importeMenor;
var paisMinimoImporte;
var importeMayor;
var marcaMaximoImporte;
var promedio;
var contadorIteracciones;
var acumuladorImporte;
var bandera;
var contadorProductosChina;
var porcentaje;
var porcentajeAplicado;
var descuentoAplicado;

contadorIteracciones = 0;

contadorProductosChina = 0;
acumuladorImporte = 0;
porcentaje = 10;

bandera = "Primera vuelta";

  while(contadorIteracciones<5)
  {
    importesIngresados = prompt("Ingrese su importe");
    importesIngresados = parseInt(importesIngresados);

    while(isNaN(importesIngresados))
    {
      importesIngresados = prompt("Caracter no valido, ingrese un numero");
      importesIngresados = parseInt(importesIngresados);
    }



    marcaIngresada = prompt("Ingrese la marca registrada");



    paisDeOrigenIngresado = prompt("Ingrese el pais de Origen");

    while(paisDeOrigenIngresado != "China" && paisDeOrigenIngresado != "Uruguay" && paisDeOrigenIngresado != "Paraguay")
    {
      paisDeOrigenIngresado = prompt("Pais no registrado para el importe, ingrese China, Uruguay o Paraguay");
    }



    if(bandera == "Primera vuelta")
    {
      importeMayor = importesIngresados;
      marcaMaximoImporte = marcaIngresada;

      importeMenor = importesIngresados;
      paisMinimoImporte = paisDeOrigenIngresado;

      bandera = "Ya no";
    }
    else
    {
      if(importesIngresados > importeMayor)
      {
        importeMayor = importesIngresados;
        marcaMaximoImporte = marcaIngresada;
      }
      else
      {
        if(importesIngresados < importeMenor)
        {
          importeMenor = importesIngresados;
          paisMinimoImporte = paisDeOrigenIngresado;
        }
      }
    }

    acumuladorImporte = acumuladorImporte + importesIngresados;

    if(paisDeOrigenIngresado == "China")
    {
      contadorProductosChina = contadorProductosChina + 1;
    }

    contadorIteracciones ++;

  }

  promedio = acumuladorImporte / contadorIteracciones;

  porcentajeAplicado = importeMayor * porcentaje / 100;

  descuentoAplicado = importeMayor - porcentajeAplicado

  alert("El importe minimo es " + importeMenor + " y su pais " + paisMinimoImporte + ". El maximo importe es " + importeMayor + " y su marca es " + marcaMaximoImporte + ". El promedio del importe es " + promedio + " y la cantidad de productos de China son " + contadorProductosChina + " Y el porcentaje del 10% sobre del maximo importe es " + descuentoAplicado);
 */