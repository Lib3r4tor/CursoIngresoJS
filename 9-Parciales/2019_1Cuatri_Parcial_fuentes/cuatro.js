function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    var resta;
    var restaMayor;

    numeroUno = prompt("Ingrese el primer numero");
    numeroUno = parseInt(numeroUno);

    numeroDos = prompt("Ingrese el segundo numero");
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
        else
        {
            if(numeroDos > numeroUno)
            {
                alert("La suma da " + suma);
            }
        }
    }
    if(resta > 10)
    {
        alert("La resta es " + resta + " y supero el 10.")
    }
}
