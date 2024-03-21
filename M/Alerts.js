/*ALERTA DE RESERVA*/
var txtName = document.getElementById("nombre");
var txtMail = document.getElementById("email");

  /*LIMPIAR CAMPOS*/ 
  function Limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
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
      Limpiar();
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

  function SeleccionarItem(option) {resul = option.value;}

function alertReservas() {
  if (txtName.value == "" || txtMail.value == "") {
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
  }
};

