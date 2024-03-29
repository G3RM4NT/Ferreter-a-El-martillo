const form = document.getElementById("form-r");

form.addEventListener('submit', function(event){
    event.preventDefault();
    let name = document.getElementById("nombre");
    let email = document.getElementById("email")
    let tel = document.getElementById("phone");
    let pr = document.getElementById("form-select");
    
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
                <li><b>Nombre:</b>${name}</li>
                <li><b>Correo:</b>${email}</li>
                <li><b>Teléfono:</b>${tel}</li>
                <li><b>Producto:</b>${pr}</li>
            </ul>
        </div>
        <button class="btn btn-warning" onclick="ReservaEntregada()">Entregado</button>
    </div>
</div>`;

    let newCardReserva ;
})