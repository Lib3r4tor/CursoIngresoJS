/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //Variables
    var cantidadLamparita;
    var precioLamparita;
    var marca;
    var porcentaje;
    var precioBruto
    var precioFinal;
    var descuento;
    var brutoSuperado
    

    //Operaciones  Cantidad ingresada
    cantidadLamparita = document.getElementById("txtIdCantidad").value
    cantidadLamparita = parseInt(cantidadLamparita);
    //Valor de las lamparitas
    precioLamparita = 35;
    //Marcas de lamparas
    marca = document.getElementById("Marca").value;
    //Precio de las cantidades ingresadas
    precioBruto = cantidadLamparita * precioLamparita;
    //porcentaje
    porcentaje = 0;
    //Punto  E
    brutoSuperado = 10;

    switch(cantidadLamparita)
    {
        case 5 :
            switch (marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;
            }
        break;
        case 4 :
            switch(marca)
            {
                case "ArgentinaLuz":
                    
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje = 20;
                    break;
            }
        break;
        case 3 :
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 15;
                    break;
                case "FelipeLamparas":
                    porcentaje = 10;
                    break;
                default:
                    porcentaje = 5;
                    break;
            }
        break;
    }

    if(cantidadLamparita >= 6)
    {
        porcentaje = 50;
    }
    
    if(precioBruto >= 120)
            {
                precioFinal = precioBruto + descuento;
    
                descuento = precioBruto * brutoSuperado / 100;
    
                alert("Usted pago " + precioBruto + "$, siendo " + descuento + "$ el impuesto que se pagó." );
            }
        
    



    descuento = precioBruto * porcentaje / 100;

    precioFinal = precioBruto - descuento;

    document.getElementById("txtIdprecioDescuento").value = precioFinal

}