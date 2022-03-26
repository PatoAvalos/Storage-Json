/* ========== Modificar Título de sección SERVICIOS desde el DOM  ========== */

const tituloServicios = document.querySelector("#tituloServicios"); 
console.log(tituloServicios);
tituloServicios.innerText = "CONOCE NUESTROS SERVICIOS";
console.log(tituloServicios);

/* ========== Modificar listado de SERVICIOS desde el DOM  ========== */

const cargarServicios = () => {
    for (serv of servicios2){ 
        let itemList ="<li class='list-group-item'>" + serv + "</li>" 
        listadoServicios.innerHTML += itemList;
    }
}

cargarServicios();
console.log("La lista de Servicios se genera desde el archivo main");

/* ========== Obtener datos del formulario  ========== */