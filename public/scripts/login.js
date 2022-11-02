window.addEventListener("load", function() {
 
    let formulario = document.querySelector("form.form-log");

    formulario.addEventListener("submit", function (e) {
        
        // Validación usuario (email)
        let usuario = document.querySelector("#usuario");
        let errorUsuario = document.querySelector("#errorEmail");
        errorUsuario.innerHTML = "";
        if ( usuario.value == "") {
          errorUsuario.innerHTML += "Debe ingresarse email!!!!!";
          
        } else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.value))  {
            errorUsuario.innerHTML += "Debe ingresarse una dirección de email válida!!!!";
        } 

        //Validación Password
        let password = document.querySelector("#password");
        let errorPassword = document.querySelector("#errorPassword");
        errorPassword.innerHTML = "";
        if ( password.value == "") {
            errorPassword.innerHTML += "Debe ingresarse password!!!!!"
        }   

        // Si hubo errores, no enviar el formulario
        if ( errorUsuario.innerHTML != "" || errorPassword.innerHTML != "" ) {
            e.preventDefault(); 
        }
    })
})