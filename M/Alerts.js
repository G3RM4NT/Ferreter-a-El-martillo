/*ALERTA DE RESERVA*/
var selectedItem = document.getElementById("selector").value;
var defaultItem = document.getElementById("default").value;

var txtName = document.getElementById("nombre").value;
var txtMail = document.getElementById("email").value;

  /*LIMPIAR CAMPOS*/ 
  function Limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
  }
  
  function alertReservas(){
    if(txtName == "" || txtMail == "")
    {
      Swal.fire({
        title: "¡Atención!",
        text: "Ingrese los datos solicitados para completar el proceso",
        icon: "warning",
        iconColor: "danger"
      });
    }
    else {
      Swal.fire({
          title: "Éxito",
          text: "Se registró satisfactoriamente",
          icon: "success",
          iconColor: "#ffde59"
        });
        Limpiar();
    }

  };

