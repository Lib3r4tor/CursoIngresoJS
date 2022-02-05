
function mostrar()
{
    var ladoUno;
    var ladoBase;
    var perimetro;

    ladoUno = prompt("Ingrese el valor de los lados del triangulo");

    ladoUno = parseInt(ladoUno);

    ladoBase = prompt("ingrese el valor de la base del triangulo");

    ladoBase = parseInt(ladoBase);

    perimetro = ladoBase + (ladoUno * 2);

    alert("el perimetro de tu triangulo es " + perimetro);



}
