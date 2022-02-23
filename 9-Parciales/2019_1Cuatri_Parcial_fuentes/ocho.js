/*Realizar el algoritmo que permita iterar el ingreso de dos datos
una letra y un número entre -100 y 100 (validar)
hasta que el usuario quiera
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
    var letraIngresada;
    var numeroIngresado;
    var numeroImpar;
    var contadorNumeroImpar
    var numeroPar;
    var contadorNumeroPar;
    var contadorCeros;
    var promedioNumerosPositivos;
    var contadorNumerosPositivos;
    var sumaNumerosNegativos;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaxima;
    var letraMinima;
    var respuesta;
    var banderaNumerica;
    var numeroParseado;
    var contadorVueltasNumerosPositivo;
    
    banderaNumerica = "Esta es la primera vuelta";

    respuesta = "si";

    numeroPar = 2;

    contadorNumeroPar = 0;

    contadorNumeroImpar = 0;

    contadorCeros = 0;

    contadorNumerosPositivos = 0;

    contadorVueltasNumerosPositivo = 0;

    sumaNumerosNegativos = 0;


    while(respuesta == "si")
    {
        letraIngresada = prompt("Ingrese una letra");

        numeroIngresado = prompt("Ingrese un numero");
        numeroParseado = parseInt(numeroIngresado);

        while(isNaN(numeroParseado))
        {
            numeroIngresado = prompt("Dato incorrecto, ingrese un numero");
			numeroParseado = parseInt(numeroIngresado);
        }
        while(numeroIngresado < -150 || numeroIngresado > 100)
        {
            numeroIngresado = prompt("Numero no valido, ingrese un numero valido");
            numeroParseado = parseInt(numeroIngresado);
        }

        if(numeroParseado % numeroPar == 0)
        {
            contadorNumeroPar = contadorNumeroPar + 1;
        }
        else
        {
            if(numeroParseado % numeroPar != 0)
            {
                contadorNumeroImpar = contadorNumeroImpar + 1;
            }
        }
        if(numeroParseado == 0)
        {
            contadorCeros = contadorCeros + 1;
        }
        else
        {
            if(numeroParseado > 0)
            {
                contadorNumerosPositivos += numeroParseado;
                contadorVueltasNumerosPositivo = contadorVueltasNumerosPositivo + 1;
            }
            else
            {
                if(numeroParseado < 0)
                {
                    sumaNumerosNegativos += numeroParseado;
                }
            }
        }
        if(banderaNumerica == "Esta es la primera vuelta")
        {
            numeroMaximo = numeroParseado;

            letraMaxima = letraIngresada;

            numeroMinimo = numeroParseado;

            letraMinima = letraIngresada;

            banderaNumerica = "Ya no es la primera vuelta"
        }
        else
        {
            if(numeroParseado > numeroMaximo)
            {
                numeroMaximo = numeroParseado;
				
            }
            else
            {
                if(numeroParseado < numeroMinimo)
                {
                    numeroMinimo = numeroParseado;
                }
            }
        }

        respuesta = prompt("Desea continuar?");
    }

    promedioNumerosPositivos = contadorNumerosPositivos / contadorVueltasNumerosPositivo;


    document.write("La cantidad de numeros impares es " + contadorNumeroImpar);

    document.write("<br> mientras que la cantidad de numeros pares es" + contadorNumeroPar);

    document.write("<br> La cantidad de ceros es " + contadorCeros);
    
    document.write("<br> El promedio de los numeros postivos es " + promedioNumerosPositivos);

    document.write("<br> y la suma de los numeros negativos es " + sumaNumerosNegativos);

    document.write("<br> El numero maximo es " + numeroMaximo);

    document.write("<br> El numero minimo es " + numeroMinimo);

    document.write("<br> La letra maxima es " + letraMaxima);

    document.write("<br> Y la letra minima es " + letraMinima);


}

