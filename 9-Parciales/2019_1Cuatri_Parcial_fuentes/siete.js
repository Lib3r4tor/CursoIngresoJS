function mostrar()
{
    var alturaIngresado;
    var sexoIngresado;
    var contador;
    var suma;
    var numeroParseado;
    var alturaMinima;
    var alturaMaxima;
    var promedioDivision;
    var mujeresAltas;
    var sexoDeAlturaBaja;
    var acumulador;
    var promedio;
    var bandera;

    contador = 0;

    bandera = "Es la primera vuelta"

    acumulador = 0;

    promedioDivision = 5;

    mujeresAltas = 0;

    while(contador<5)
    {
        alturaIngresado =  prompt("Ingrese su altura (de 0 a 250 cm)");
        numeroParseado = parseInt(alturaIngresado);

        while(isNaN(numeroParseado))
		{
			alturaIngresado = prompt("Dato incorrecto, ingrese un numero");
			numeroParseado = parseInt(alturaIngresado);
		}

        while(numeroParseado < 0 || numeroParseado > 250)
        {
            alert("Altura ingresada no valida, intente de nuevo");

            numeroParseado = prompt("Ingrese su altura");
        }

        sexoIngresado = prompt("ingrese su sexo. (f ó m).");

        while(sexoIngresado != "f" && sexoIngresado != "m")
        {
            alert("Sexo no valido.");
    
            sexoIngresado = prompt("Ingrese f o m");
        }

        acumulador += numeroParseado;

        if(bandera == "Es la primera vuelta")
        {
            alturaMaxima = numeroParseado;

            alturaMinima = numeroParseado;

            bandera = "Ya no es la primera vuelta"
        }
        else
        {
            if(numeroParseado > alturaMaxima)
            {
                alturaMaxima = numeroParseado;
            }
            else
            {
                if(numeroParseado < alturaMinima)
                {
                    sexoDeAlturaBaja = sexoIngresado;
                    alturaMinima = numeroParseado;
                }
            }
        }
        if(numeroParseado > 190 && sexoIngresado == "f")
            {
                mujeresAltas++;
            }   
        

        contador = contador + 1;

    }

    promedio = acumulador / promedioDivision;

    alert("El promedio de altura es  " + promedio + " centimetros. La altura mas baja es de " + alturaMinima + " centimetros y el sexo de esa persona es " + sexoDeAlturaBaja + ". La cantidad de mujeres que son altas son " + mujeresAltas + " Mujeres.")    
}