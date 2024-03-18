/*ALERTA DE RESERVA*/
var selectedItem = document.getElementById("selector").value;
var defaultItem = document.getElementById("default").value;

var txtName = document.getElementById("nombre");
var txtMail = document.getElementById("email");

  /*LIMPIAR CAMPOS*/ 
  function Limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
  }
  
  function Exito()
  {
    Swal.fire({
        title: "Éxito",
        text: "Se registró satisfactoriamente",
        icon: "success",
        iconColor: "#ffde59"
      });
      Limpiar();
  }

  function Error()
  {
    Swal.fire({
      title: "¡Atención!",
      text: "Ingrese los datos solicitados para completar el proceso",
      icon: "warning",
      iconColor: "danger"
    });
    return;
  }
  function alertReservas(){
 if(txtName.value == "" || txtMail.value == "")
 {
  Error();
 }
 else{
  Exito();
 }
  };

