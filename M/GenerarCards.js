function GenerarCards()
{
  const cardsReservas = `<div class="carD">
    <div class="face face1">
        <div class="content">
            <i class="fa-regular fa-clock fa-spin" style="font-size: 2em; color: #ffffff;"></i>
            <h3></h3>
        </div>
    </div>
    <div class="face face2 ">
        <div class="info-reserva">
            <ul class="pt-4 text-left">
                <li><b>Nombre:</b></li>
                <li><b>Correo:</b></li>
                <li><b>Teléfono:</b></li>
                <li><b>Producto:</b></li>
            </ul>
        </div>
        <button class="btn btn-warning" onclick="ReservaEntregada()">Entregado</button>
    </div>
</div>`;

return cardsReservas;
}