function mostrar()
{
    var precioPedido;
    var porcentajePedido;
    var precioFinal;
    var descuento;

    precioPedido = prompt("Ingrese el precio pedido");

    precioPedido = parseInt(precioPedido);

    porcentajePedido = prompt ("Ingrese el descuento pedido");

    porcentajePedido = parseInt(porcentajePedido);

    descuento = precioPedido * porcentajePedido / 100;

    descuento = parseInt(descuento)

    precioFinal = precioPedido - descuento;

    precioFinal = parseInt (precioFinal)

    document.getElementById("elPrecioFinal").value = precioFinal

}
