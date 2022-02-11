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
 	var lamparitasCantidad;
    var lamparitasPrecio;
    var descuento;
    var porcentaje;
    var marca;
    var lamparitasPrecioCantidad;
    var lamparitasPrecioAplicado;


    // Operaciones
        //Valor de las lamparitas
        lamparitasPrecio = 35;
        //Cantidad de lamparitas ingresadas
        lamparitasCantidad = document.getElementById("txtIdCantidad").value;
        lamparitasCantidad = parseInt(lamparitasCantidad);
        //Declaracion de la marca a seleccionar
        marca = document.getElementById("Marca").value;
        //Valor de la cantidad de lamparitas ingresadas
        lamparitasPrecioCantidad = lamparitasCantidad * lamparitasPrecio;
        //Porcentaje
        porcentaje = 0;
        //Precio neto de lamparitas
        lamparitasPrecioAplicado = lamparitasPrecioCantidad;
    //if y else de los ejercicios

        if(lamparitasCantidad >=6 )
        {  
        porcentaje = 50;    
        }
        else 
        {
            if(lamparitasCantidad == 5)
            {
                if (marca == "ArgentinaLuz")
                {
                    porcentaje = 40;
                }
                else
                {
                    porcentaje = 30;
                }
            }
            else
            {
                if(lamparitasCantidad == 4)
                {
                    if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                    {
                        porcentaje = 25;
                    }
                    else
                    {
                        porcentaje = 20;
                    }
                }
                else
                {
                    if(lamparitasCantidad == 3)
                    {
                        if(marca == "ArgentinaLuz")
                        {
                            porcentaje = 15;
                        }
                        else
                        {
                            if(marca == "FelipeLamparas")
                            {
                                porcentaje = 10
                            }
                            else
                            {
                                porcentaje = 5
                            }
                        }
                    }          
                }
            }                         
        }       
        if(lamparitasPrecioAplicado>120)
        {
            porcentaje = 10;
            descuento = lamparitasPrecioCantidad * porcentaje / 100;
            lamparitasPrecioAplicado + descuento;
            alert("Usted pago " + lamparitasPrecioAplicado + "$ , siendo " + descuento + "$, el impuesto que se pagó.")

        }


    descuento = lamparitasPrecioCantidad * porcentaje / 100;


    lamparitasPrecioAplicado = lamparitasPrecioCantidad - descuento;


    document.getElementById("txtIdprecioDescuento").value = lamparitasPrecioAplicado
}  
            
