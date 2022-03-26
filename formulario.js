/* ========== Ingreso de datos del usuario  ========== 

let nombre = prompt("Ingresa tu nombre")
nombre = nombre.toUpperCase();
let correo = prompt("Ingresa tu correo electrónico")
correo = correo.toUpperCase();
let tituloMsj = prompt("Título del mensaje");
tituloMsj = tituloMsj.toUpperCase();
let mensaje = prompt("Describe el motivo de contactarnos");
mensaje = mensaje.toUpperCase(); 

MostrarDatos();

/* ========== Función para mostrar los datos del usuario  ========== 
function MostrarDatos() {
  console.log("nombre:  " + nombre);
  console.log("correo electrónico:  " + correo);
  console.log("título mensaje:  " + tituloMsj);
  console.log("mensaje:  " + mensaje);
}

/* ========== Ingreso de datos del servicio requerido por el usuario  ========== */

let servicio = prompt(
  "¿Que servicio de diseño requieres?: Identidad,  Publicitario, Editorial, y Diseño Web"
);
 servicio = servicio.toUpperCase(); 
console.log("SERVICIO REQUERIDO:   " + servicio);

/* ========== Creación de un objeto del servicio que el usuario requiere  ========== */

class servicioElegido {
  constructor(descripcion, precio) {
    this.descripcion = descripcion;
    this.precio = parseInt(precio);
    let impuesto = precio * 0.21;
    let descuento = precio * 0.1;
    let total = precio + impuesto - descuento;

    MostrarDatosServicio(descripcion, precio, impuesto, descuento, total);
  }
}

function MostrarDatosServicio(descripcion, precio, impuesto, descuento, total) {
  console.log("DESCRIPCIÓN DEL SERVICIO:   " + descripcion);
  console.log("PRECIO:         $ " + precio);
  console.log("21% IVA:        $ " + impuesto);
  console.log("10% DESCUENTO:  $ " + descuento);
  console.log("TOTAL:          $ " + total);
}

/* ========== Generación del arreglo con descripción y precio del servicio ========== */

const serviciosElegidos = [];

switch (servicio) {
  case "IDENTIDAD":
    serviciosElegidos.push(
      new servicioElegido(
        "Emblema, Imagotipo, Logotipo, Paleta de colores, Fuentes Tipográficas, Papelería corporativa, 2 mockup",
        4000
      )
    );
    break;
  case "PUBLICITARIO":
    serviciosElegidos.push(
      new servicioElegido(
        "Diseño de Flyers, dipticos, tripticos, Cartel o Infografía",
        2500
      )
    );
    break;
  case "EDITORIAL":
    serviciosElegidos.push(
      new servicioElegido(
        "Catálogo de servicios, Menu, Manual o Curriculum Vitae",
        5000
      )
    );
    break;
  case "DISEÑO WEB":
    serviciosElegidos.push(
      new servicioElegido("Sitio Web Informativo o Landing Page", 7500)
    );
    break;
  default:
    console.log(
      "Si el servicio que requiere necesita ser más especifico a tu necesidad, ponte en contacto con nosotros"
    );
}
/* ========== Impresion de los datos de los elementos del arreglo  ========== */

console.table(serviciosElegidos);
