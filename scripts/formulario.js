var form = document.getElementById("form");

function ValidarNombre(e){
    if(form.nombre.value == ""){
        alert("El nombre es obligatorio un campo obligatorio.");
    }
    e.preventDefault();
}

function ValidarMail(e){
    if(form.mail.value == ""){
        alert("El mail es obligatorio un campo obligatorio.");
    }
    e.preventDefault();
}

function ValidarTextArea(e){
    if(form.consulta.value.length == ""){
        alert("No puede quedar el campo d ela consulta vacio.");
    }
    e.preventDefault();
}

var validar = function(e){
    ValidarNombre(e);
    ValidarMail(e);
    ValidarTextArea(e);
    this.submit();
}


form.addEventListener("submit", validar);

