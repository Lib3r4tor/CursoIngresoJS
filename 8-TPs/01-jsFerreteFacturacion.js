/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;

    precioUno = document.getElementById("txtIdPrecioUno").value;

    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;

    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioTres = parseInt(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;

    alert("La suma de los precios es " + sumaDePrecios);

}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;
    var promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;

    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;

    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioTres = parseInt(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;

    promedio = sumaDePrecios / 3;

    alert("El promedio de los precios es " + promedio);
	
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaDePrecios;
    var porcentaje;
    var importeFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;

    precioUno = parseInt(precioUno);

    precioDos = document.getElementById("txtIdPrecioDos").value;

    precioDos = parseInt(precioDos);

    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioTres = parseInt(precioTres);

    sumaDePrecios = precioUno + precioDos + precioTres;

    porcentaje = sumaDePrecios * 21 / 100;

    importeFinal = sumaDePrecios + porcentaje


    alert("El precio final con IVA incluido es " + importeFinal );
	
}