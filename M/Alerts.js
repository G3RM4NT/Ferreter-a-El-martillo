/*ALERTA DE RESERVA*/
var txtName = document.getElementById("nombre");
var txtMail = document.getElementById("email");
var txtPhone = document.getElementById("phone");
var product = document.getElementById("form-select");

  /*LIMPIAR CAMPOS*/ 
  function Limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    var selector = document.getElementById("selector");
    selector.selectedIndex = 0;
  }
  
  /*FUNCIONES*/
  var resul;

  function Exito()
  {
    Swal.fire({
        title: "Éxito",
        text: "Se registró satisfactoriamente",
        icon: "success",
        iconColor: "#ffde59",
        confirmButtonColor: "#000000",
        color: "#000",
        focusConfirm: false,
      });
  }

  function CamposVacios()
  {
    Swal.fire({
      title: "¡Atención!",
      text: "Ingrese los datos solicitados para completar el proceso",
      icon: "warning",
      iconColor: "danger",
      confirmButtonColor: "#000000",
      color: "#000",
      focusConfirm: false,
    });
    return;
  }

  function ReservaEntregada()
  {
    Swal.fire({
      title: "¿Desea marcar como entregada?",
      text: "Asegúrate que se haya completado la reserva",
      icon: "question",
      iconColor: "#ffde59",
      showCancelButton: true,
      confirmButtonColor: "#1f1f1f",
      cancelButtonColor: "#ffde59",
      cancelButtonText: "No",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Éxito",
        text: 'Se marcó como "Reserva entregada"',
        icon: "success",
        iconColor: "#ffde59",
        confirmButtonColor: "#000000",
        color: "#000",
        focusConfirm: false,
        });

        /*Insertar en la tabla de ventas 0R IDK, IT MIGHT BE*/
      }
    });
  }

  function SeleccionarItem(option) {resul = option.value;}

  function GuardarReservas(){
document.querySelector("div.con").removeAttribute("hidden");

let CardsContainer = document.getElementById("cards");
CardsContainer.innerHTML += `<div class="carD">
<div class="face face1">
    <div class="content">
        <i class="fa-regular fa-clock fa-spin" style="font-size: 2em; color: #ffffff;"></i>
        <h3></h3>
    </div>
</div>
<div class="face face2">
    <div class="info-reserva">
        <ul class="pt-4 text-left">
            <li><b>Nombre:</b> ${txtName.value}</li>
            <li><b>Correo:</b> ${txtMail.value}</li>
            <li><b>Teléfono:</b> ${txtPhone.value}</li>
            <li><b>Producto:</b></li>
        </ul>
    </div>
    <button class="btn btn-warning" onclick="ReservaEntregada()">Entregado</button>
</div>
</div>`;
}

window.onload = function OcultarApartadoReservas(){
  document.querySelector("div.con").setAttribute("hidden","");
}

function alertReservas() {
  if (txtName.value == "" || txtMail.value == "" || txtPhone.value == "") {
    CamposVacios();
  }
  else if (resul == undefined) {
    Swal.fire({
      title: "¡Atención!",
      text: "Seleccione un producto para completar el proceso",
      icon: "warning",
      iconColor: "danger",
      confirmButtonColor: "#000000"
    });
  }
  else {
    Exito();
    GuardarReservas();
    Limpiar();
  }
};

