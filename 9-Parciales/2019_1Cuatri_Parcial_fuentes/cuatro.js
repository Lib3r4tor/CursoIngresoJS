function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    var resta;
    var restaMayor;

    numeroUno = prompt("Ingrese el primer numero");
    numeroUno = parseInt(numeroUno);

    numeroDos = prompt("Ingrese el segundo nombre");
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;

    resta = numeroUno - numeroDos;

    if(numeroUno == numeroDos)
    {
        alert("El primer numero es " + numeroUno + " y el segundo numero es " + numeroDos);
    }
    else
    {
        if(numeroUno > numeroDos)
        {
            alert("La resta da " + resta);
        }
    }
}
