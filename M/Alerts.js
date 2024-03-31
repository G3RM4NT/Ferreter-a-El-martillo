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
  var numDeItem = 0;
  var idDelItem = 0;
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

  function OcultarApartadoReservas(){
    document.querySelector("div.con").setAttribute("hidden","");
  }

   window.onload = OcultarApartadoReservas();

function SeleccionarItem(option) {resul = option.value;}

function GuardarReservas(){
  document.querySelector("div.con").removeAttribute("hidden");

  var idReserva;
  
  let CardsContainer = document.getElementById("cards");
  CardsContainer.innerHTML += `<div class="carD" id="${idReserva = ++idDelItem}">
  <div class="face face1">
      <div class="content">
          <i class="fa-regular fa-clock fa-spin" style="font-size: 2em; color: #ffffff;"></i>
          <h3>${++numDeItem}</h3>
          <button class="btn btn-warning p-1" onclick="ReservaEntregada(${idReserva})">Entregado</button>
      </div>
  </div>
  <div class="face face2">
      <div class="info-reserva">
          <ul class="pt-4 text-left">
              <li><b>Nombre:</b> ${txtName.value}</li>
              <li><b>Correo:</b> ${txtMail.value}</li>
              <li><b>Teléfono:</b> ${txtPhone.value}</li>
              <li><b>Producto:</b> ${resul}</li>
          </ul>
      </div>
  </div>
  </div>`;
  }

  function ComprobarExistenciaReservas()
  {
    let containerCards =  document.getElementById('cards');
    if(containerCards.hasChildNodes())
    {
      return
    }
    else
    {
      OcultarApartadoReservas();
    }
  }

  function ReservaEntregada(idReserva)
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

        const Cards = document.getElementById("cards");
        const card = document.getElementById(idReserva);
        Cards.removeChild(card);

        ComprobarExistenciaReservas();
        Swal.fire({
          title: "Éxito",
        text: 'Se marcó como "Reserva entregada"',
        icon: "success",
        iconColor: "#ffde59",
        confirmButtonColor: "#000000",
        color: "#000",
        focusConfirm: false,
        });
      }
    });
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
<<<<<<< HEAD
};
=======
};

>>>>>>> master
