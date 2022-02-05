/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var radio;
    var alambre;

    largo = document.getElementById("txtIdLargo").value;

    largo = parseInt(largo);

    ancho = document.getElementById("txtIdAncho").value;

    ancho = parseInt(ancho);

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    alambre = radio * 3;

    alambre = parseInt(alambre);


    alert ("La cantidad de alambre a comprar es " + alambre + " metros.");
    
}


function Circulo () 
{
    var perimetro;
    var radio;
    var alambre;
    const PI = 3.14

    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt (radio);

    perimetro = 2 * PI * radio;

    alambre = perimetro * 3;


    alert("La cantidad de alambre que hay que comprar es " + alambre + " metros.");
	
}



function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;
    var radio;
    

    largo = document.getElementById("txtIdLargo").value;

    largo = parseInt(largo);

    ancho = document.getElementById("txtIdAncho").value

    ancho = parseInt(largo);

    radio = largo * ancho;

    cemento = radio * 2;

    cal = radio * 3;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal para el terreno.")
	
}