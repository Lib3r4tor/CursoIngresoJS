function mostrar()
{
    var parejaUno;
    var parejaDos;
    var pesoParejaUno;
    var pesoParejaDos;
    var sumaDePesos;
    var promediopeso;

    parejaUno = prompt("Ingrese el nombre la primera persona de la relacion");

    parejaDos = prompt("Ingrese el nombre de la segunda pareja");

    pesoParejaUno = prompt ("Ingrese el peso de la primera persona");

    pesoParejaUno = parseInt(pesoParejaUno);

    pesoParejaDos = prompt("Ingrese el peso de la segunda persona");

    pesoParejaDos = parseInt(pesoParejaDos);

    sumaDePesos = pesoParejaUno + pesoParejaDos;

    promediopeso = sumaDePesos / 3;

    promediopeso = parseFloat(promediopeso);

    alert("Ustedes se llaman " + parejaUno + " y " + parejaDos + " y pesan " + pesoParejaUno + " y " + pesoParejaDos + " que sumados son " + sumaDePesos + " Kilos y el promedio de peso es " + promediopeso);
  
}
