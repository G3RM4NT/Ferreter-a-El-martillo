const carrito = document.getElementById('carrito');
const lista = document.getElementById('lista-1'); // Cambiado de elementos1 a lista
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    lista.addEventListener('click', comprarElemento); // Cambiado de elementos1 a lista
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('.agregar-carrito').getAttribute('data-id')
    };
    insertarCarrito(infoElemento);
    Exito();
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
      <img src="${elemento.imagen}" width=100/>
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
      ${elemento.precio}
    </td>
    <td>
      <a href="#" class="borrar" data-id="${elemento.id}">X</a>
    </td>
    `;
    listaCarrito.appendChild(row); // Cambiado de lista a listaCarrito
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
}

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
