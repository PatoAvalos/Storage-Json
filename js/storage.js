const guardoDatos = () => {   
    localStorage.setItem("inputNombre", inputNombre.value);
    localStorage.setItem("inputEmail", inputEmail.value);
    localStorage.setItem("inputSubject", inputSubject.value);
    localStorage.setItem("inputMessage", inputMensaje.value);
}

const recuperarDatos = ()=> {
    inputNombre.value = localStorage.getItem("inputNombre")
    inputEmail.value = localStorage.getItem("inputEmail")
    inputSubject.value = localStorage.getItem("inputSubject")
    inputMessage.value = localStorage.getItem("inputMessage")
}

const limpiarLocalStorage = ()=> {
    const resp = confirm("¿Realmente deseas eliminar los datos del LS?");
    if (resp) {
        localStorage.clear();
        console.log("se han eliminado los datos");
    }
}

btnGuardar.addEventListener("click", () => guardoDatos());

recuperarDatos ();

