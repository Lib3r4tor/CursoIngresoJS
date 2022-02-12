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

    //If y else de la operacion

    if( marca == "ArgentinaLuz")
    {
        if(cantidadLamparita >= 6)
        {
            porcentaje = 50;
        }
        else
        {
            if(cantidadLamparita == 5)
            {
                porcentaje = 40;
            }
            else
            {
                if(cantidadLamparita == 4)
                {
                    porcentaje = 25;
                }
                else
                {
                    if(cantidadLamparita == 3)
                    {
                        porcentaje = 15;
                    }
                }
            }

        }

    }
    else
    {
        if( marca == "FelipeLamparas")
        {
            if(cantidadLamparita >= 6)
            {
                porcentaje = 50;
            }
            else
            {
                if(cantidadLamparita == 5)
                {
                    porcentaje = 30;
                }
                else
                {
                    if(cantidadLamparita == 4)
                    {
                        porcentaje = 25;
                    }
                    else
                    {
                        if(cantidadLamparita == 3)
                        {
                            porcentaje = 10;
                        }
            
                    }
                }
            }
        }
    }
    if( marca == "JeLuz")
    {
        if(cantidadLamparita >= 6)
        {
            porcentaje = 50;
        }
        else
        {
            if(cantidadLamparita == 5)
            {
                porcentaje = 30;            
            }
            else
            {
                if(cantidadLamparita == 4)
                {
                    porcentaje = 20;
                }
                else
                {
                    if(cantidadLamparita == 3)
                    {
                        porcentaje = 5;
                    }
                }
            }

        }
    }
    else{
        if( marca == "HazIluminacion")
        {
            if(cantidadLamparita >= 6 )
            {
                porcentaje = 50;
            }
            else
            {
                if(cantidadLamparita == 5)
                {
                    porcentaje = 30;
                }
                else
                {
                    if(cantidadLamparita == 4)
                    {
                        porcentaje = 20;
                    }
                    else{
                        if(cantidadLamparita == 3)
                        {
                            porcentaje = 5;
                        }
                    }
                }
            }

        }
    }
    if(marca == "Osram"){
        if(cantidadLamparita >= 6)
        {
            porcentaje = 50;
        }
        else
        {
            if(cantidadLamparita == 5)
            {
                porcentaje = 30;
            }
            else
            {
                if(cantidadLamparita == 4)
                {
                    porcentaje = 20;
                }
                else
                {
                    if(cantidadLamparita == 3)
                    {
                        porcentaje = 5
                    }
                }
            }
        }
    }
    else
    {
        if(precioBruto >= 120)
        {
    
        porcentaje = 10;

        precioFinal = precioBruto - descuento;

        descuento = precioBruto * porcentaje / 100;

        precioBruto + descuento;

        alert("Usted pago " + precioBruto + "$ de IIBB., siendo " + descuento + "$ el impuesto que se pagó." );
        }

    }


    descuento = precioBruto * porcentaje / 100;

    precioFinal = precioBruto - descuento;

    document.getElementById("txtIdprecioDescuento").value = precioFinal
}