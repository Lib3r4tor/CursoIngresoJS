/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;
    var centigrados;

    fahrenheit = document.getElementById("txtIdTemperatura").value
	
    fahrenheit = parseFloat(fahrenheit);

    centigrados = (fahrenheit - 32) * 5 / 9;

    centigrados = parseInt(centigrados);

    alert("La conversion de Fahrenheit a centigrados es " + centigrados + " grados.");

}

function CentigradosFahrenheit () 
{
    var centigrados;
    var fahrenheit;
	
    centigrados = document.getElementById("txtIdTemperatura").value;

    centigrados = parseInt(centigrados);

    fahrenheit = (centigrados - 32) * 9 / 5;

    fahrenheit = parseFloat(fahrenheit);

    alert ("La conversion de centigrado a fahrenheit es " + fahrenheit + " grados.")
}
