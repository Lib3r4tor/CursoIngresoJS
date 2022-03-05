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
  var contadorIteracciones = 0;
  var nombreProducto;
  var generoProducto;
  var tipoVenta;
  var importe;
  var bandera;
  var respuesta;
  var contadorMemoriasBaratas = 0;
  var minimoImporte;
  var maximoImporte;
  var nombreProductoCaro;
  var tipoVentaProductoCaro;
  

  bandera = "Primer";

  respuesta = "si";


  while(contadorIteracciones < 5 || respuesta === "si")
  {

    nombreProducto = prompt ("Ingrese su nombre del producto");

    generoProducto = prompt("Ingrese el genero de producto");
    generoProducto = generoProducto.toLowerCase();

    while(generoProducto != "memorias" && generoProducto != "discos" && generoProducto != "motherboards")
    {
      generoProducto = prompt("NO VENDEMOS, ingrese genero del producto");
      generoProducto = generoProducto.toLowerCase();
    }

    tipoVenta = prompt("Ingrese el tipo de venta");
    tipoVenta = tipoVenta.toLowerCase();

    while(tipoVenta != "online" && tipoVenta != "local" )
    {
      tipoVenta = prompt("No hacemos ventas por ese metodo");
      tipoVenta = tipoVenta.toLowerCase();
    }

    importe = prompt("Ingrese el importe");
    importe = parseInt(importe);

    while(isNaN(importe))
    {
      importe = prompt("ERROR, ingrese en numeros el importe");
      importe = parseInt(importe);
    }

    while(importe <= 0 || importe =='')
    {
      importe = prompt("ERROR, NO ACEPTA IMPORTES VACIOS O 0 NI VALORES NEGATIVOS, INGRESE UN NUMER VALIDO");
      importe = parseInt(importe);
    }

    if(bandera == "Primer")
    {
      minimoImporte = importe;

      maximoImporte = importe;

      bandera = "Ya no"
    }
    else
    {
      if(generoProducto == "discos")
      {
        if(importe < minimoImporte)
        {
          minimoImporte = importe;
        }
      }
    }
    if(importe > maximoImporte)
    {
      maximoImporte = importe;
      nombreProductoCaro = nombreProducto;
      tipoVentaProductoCaro = tipoVenta;

    }

    if(generoProducto == "memorias" && importe <= 850)
    {
      contadorMemoriasBaratas = contadorMemoriasBaratas + 1;
    }





    contadorIteracciones = contadorIteracciones + 1;

    if(contadorIteracciones == 5)
    {
      respuesta = prompt("desea continuar?")
      respuesta = respuesta.toLowerCase();
    }
  }


  alert("El importe del disco mas barato es " + minimoImporte);
  alert("El nombre del producto mas caro es" +" "+ nombreProductoCaro +" "+ "y su tipo de venta es" +" "+ tipoVentaProductoCaro);
  alert("La cantidad de memorias que su valor es menor a $850 son:" +" "+  contadorMemoriasBaratas);


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