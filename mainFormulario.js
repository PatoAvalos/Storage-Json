/* estados de las cajas de texto
change
focus
blur - cuando pierde el foco
click

/* ========== Modificar el color del campo nombre al momento de que adquiere el foco  ========== */

inputNombre.addEventListener("focus", () => {
    inputNombre.className = "maincss";
    
})

inputNombre.addEventListener("blur", () => {
    inputNombre.className = ""
    mostrar();
    
})

function mostrar() {
    let nom = document.querySelector('#inputNombre').value;
    console.log('Ingreso el nombre:' + nom);   
}

mostrar();
/* ========== Botón de enviar  ========== */


btnSubmit.addEventListener("mousemove", ()=>{
    btnSubmit.title="Complete los datos antes de pulsar ENVIAR";
})

document.addEventListener("btnSubmit", (event)=> {
    event.preventDefault();
    alert("Formulario enviado");
})



btnSubmit.addEventListener("mousemove", () => {
    btnSubmit.title ="Complete los campos antes de enviar el formulario"
})

btnSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Formulario enviado");
})