function mostrar()
{
   var cantidadDeHabitantes;
   var cantidadParseado;
   var cantidadMaximaHabitantes;
   var cantidadMinimaHabitantes
   var nombrePais;
   var nombrePaisCantidadMaximo;
   var nombrePaisCantidadMinima;
   var temperaturaRegistrada;
   var temperaturaParseada;
   var respuesta;
   var flag;
   var numeroPar;
   var contadorNumeroPar;
   var contadorPaisesSuperenGrados;
   var acumuladorPromedio;
   var promedio;
   var contadorIteraciones;
   var temperaturaMinima;
   var temperaturaMaxima;
   var nombrePaisMinimaTemperatura;

   numeroPar = 0;
   contadorNumeroPar = 0;
   contadorPaisesSuperenGrados = 0;
   contadorIteraciones = 0;

   acumuladorPromedio= 0;

   respuesta = "si";

   flag = "Primera vuelta";

   while(respuesta == "si")
   {
        nombrePais = prompt("Ingrese el nombre del pais");

        cantidadDeHabitantes = prompt("Ingrese la cantidad de habitantes (Millones)");
        cantidadParseado = parseInt(cantidadDeHabitantes);

        while(isNaN(cantidadParseado))
        {
            cantidadDeHabitantes = prompt("Dato incorrecto, ingrese un numero");
			cantidadParseado = parseInt(cantidadDeHabitantes);
        }
        while(cantidadDeHabitantes < 1 || cantidadDeHabitantes > 7000)
        {
            cantidadDeHabitantes = prompt("Numero no valido, ingrese un numero valido");
            cantidadParseado = parseInt(cantidadDeHabitantes);
        }  
        acumuladorPromedio += cantidadDeHabitantes;
        acumuladorPromedio = parseInt(acumuladorPromedio);

        temperaturaRegistrada = prompt("Ingrese la temperatura registrada en su territorio");
        temperaturaParseada = parseInt(temperaturaRegistrada);

        while(isNaN(temperaturaParseada))
        {
            temperaturaRegistrada = prompt("Temperatura ingresada no valida, ingrese un numero");
            temperaturaParseada = parseInt(temperaturaRegistrada);
        }

        while(temperaturaRegistrada < -50 || temperaturaRegistrada > 50)
        {
            temperaturaRegistrada = prompt("Numero no valido, ingrese un numero valido");
            temperaturaParseada = parseInt(temperaturaRegistrada);
        }

        if(temperaturaParseada % numeroPar == 0)
        {
            contadorNumeroPar = contadorNumeroPar + 1;
        } 

        if(flag = "Primera vuelta")
        {
            cantidadMaximaHabitantes = cantidadParseado;

            nombrePaisCantidadMaximo = nombrePais;

            cantidadMinimaHabitantes = cantidadParseado;

            nombrePaisCantidadMinima = nombrePais;

            temperaturaMaxima = temperaturaParseada;

            temperaturaMinima = temperaturaParseada;

            flag = "Ya no es la primera vuelta"
        }
        else
        {
            if(cantidadParseado > cantidadMaximaHabitantes)
            {
                cantidadMaximaHabitantes = cantidadParseado;
				
            }
            else
            {
                if(cantidadParseado < cantidadMinimaHabitantes)
                {
                    cantidadMinimaHabitantes = cantidadParseado;
                    nombrePaisCantidadMinima = nombrePais;
                }
            }         
        }
        if(temperaturaParseada > 40)
        {
            contadorPaisesSuperenGrados = contadorPaisesSuperenGrados + 1;
        }
        else
        {
            if(temperaturaParseada < temperaturaMinima)
            {
                temperaturaMinima = temperaturaParseada;
                nombrePaisMinimaTemperatura = nombrePais;
            }
        }

        contadorIteraciones = contadorIteraciones + 1;
        
        respuesta = prompt("Desea continuar?");
    } 
    promedio = acumuladorPromedio / contadorIteraciones;  

    document.write("La cantidad de numeros pares de temperaturas es " + contadorNumeroPar);

    document.write("<br> La cantidad de paises con menos habitantes es  " + nombrePaisCantidadMinima);

    document.write("<br> La cantidad de paises que superan los 40 grados es " + contadorPaisesSuperenGrados);
    
    document.write("<br> El promedio de los habitantes son " + promedio);

    document.write("<br> la temperatura minima y el nombre del pais que registro esa temperatura fue " + temperaturaMinima + paisMinimaTemperatura);
}    
