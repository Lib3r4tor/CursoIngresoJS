function mostrar()
{
var lugarIngresado;
var diasIngresados;
var descuento;
var porcentaje;
var porcentajeUno;
var precio;
var precioBruto;
var precioFinal;
var medioDePago;
var descuentosSumados;


lugarIngresado = document.getElementById("Marca").value;

diasIngresados = prompt("Ingrese la cantidad de dias");
diasIngresados = parseInt(diasIngresados);

medioDePago = prompt("Ingrese su medio de pago (efectivo, debito o mercado pago.)")

precio = 100;

precioBruto = diasIngresados * precio;

porcentaje = 0;

porcentajeUno = 0;

switch(lugarIngresado)
{
    case "América":

        porcentaje = 50;

        switch(medioDePago)
        {
            case "debito":
                porcentajeUno = 10;
                break;
        }
    break;

    case "África":
        
        porcentaje = 60;

        switch(medioDePago)
        {
            case "mercado pago":

            case "efectivo":
                porcentajeUno = 15;
            break;

        }
    break;

    case "Europa":
        
        porcentaje = 20;

        switch(medioDePago)
        {
            case "debito":
                porcentajeUno = 15;
                break;
            case "mercado pago":
                porcentajeUno = 10;
                break;
            default:
                porcentajeUno = 5;
                break;
        }
    break;

    default:
        porcentaje = 20;
        break;
}

descuentosSumados = porcentaje + porcentajeUno;

descuento = precioBruto * descuentosSumados / 100;

precioFinal = precioBruto - descuento;

alert("Su precio total con descuento es " + precioFinal + "$. Su descuento fue del " + descuentosSumados + "%.")



}
