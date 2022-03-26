/* ---- Creación de un objeto -----

const newservices = {
  nuevoServicio: "Identidad",
  descripcionServicio:
    "Emblema, Imagotipo, Logotipo, Paleta de colores, Fuentes Tipográficas, Papelería corporativa, 2 mockup",
  precioServicio: 4000,
  };

/* convertir un objeto en formato JSON 
const enJSON = JSON.stringify(newservices);
console.log(enJSON);

/* Guardar el objeto JSON en el local Storage 
localStorage.setItem("miServicio", enJSON);

/* Vuelve a convertir el formato JSON a un objeto de JS 
const jsonRecuperado = JSON.parse(localStorage.getItem("miServicio"));
console.log(jsonRecuperado); */

const guardoDatosJSON = ()=> {
    debugger
    const datosForm = {servicio: "", descripcion:"", precio: 0}
        datosForm.newservices = newservices.value
        datosForm.descripcionServicio = descripcionServicio.value
        datosForm.precioServicio = precioServicio.value
        localStorage.setItem("datosDelForm", JSON.stringify(datosForm))
        console.info("Se ha almacenado el array en LS.")
}

btnGuardarServicio.addEventListener("click", guardoDatosJSON)


const recuperoDatosJSON = ()=> {
    //debugger
    if (localStorage.getItem("datosDelForm") != null) {
        datosDelForm = JSON.parse(localStorage.getItem("datosDelForm"))
        newservices.value = datosDelForm.newservices
        descripcionServicio.value = datosDelForm.descripcionServicio
        precioServicio.value = datosDelForm.precioServicio
    }
}

recuperoDatosJSON()