window.addEventListener("load", function() {
 
    let formulario = document.querySelector("form.form-reg");

    formulario.addEventListener("submit", function (e) {
        
        // Validación Nombre
        let nombre = document.querySelector("#nombre");
        let errorNombre = document.querySelector("#errorNombre");
        errorNombre.innerHTML = "";
        if ( nombre.value == "") {
          errorNombre.innerHTML += "Debe ingresarse nombre!!!!!";
          
        } else if ( nombre.value.length < 2 ){
            errorNombre.innerHTML += "El nombre no puede tener menos de 2 caracteres!!!!";
            
        } 
        //Validación Apellido
        let apellido = document.querySelector("#nombre");
        let errorApellido = document.querySelector("#errorApellido");
        errorApellido.innerHTML = "";
        if ( nombre.value == "") {
          errorApellido.innerHTML += "Debe ingresarse apellido!!!!!";
          
        } else if ( apellido.value.length < 2 ){
            errorApellido.innerHTML += "El apellido no puede tener menos de 2 caracteres!!!!";
        }
        // Validación email
        let email = document.querySelector("#email");
        let errorEmail = document.querySelector("#errorEmail");
        errorEmail.innerHTML = "";
        if ( email.value == "") {
          errorEmail.innerHTML += "Debe ingresarse email!!!!!";
          
        } else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))  {
            errorEmail.innerHTML += "Debe ingresarse una dirección de email válida!!!!";
        } 

        //Validación Password
        let password = document.querySelector("#password");
        let errorPassword = document.querySelector("#errorPassword");
        errorPassword.innerHTML = "";
        if ( password.value == "") {
            errorPassword.innerHTML += "Debe ingresarse password!!!!!"
        } else if ( password.value.length < 8 ){
                    errorPassword.innerHTML += "La password no puede tener menos de 8 caracteres!!!!";

        } else if ( ! /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/.test(password.value)) {
           
            errorPassword.innerHTML += 
                "La password debe tener letras mayúsculas, minúsculas, un número y un carácter especial";
        }
        
        // Validación Avatar
        let avatar = document.querySelector("#avatar");

        let errorAvatar = document.querySelector("#errorAvatar");
        errorAvatar.innerHTML = "";
        if ( avatar.value != "" ) {
            let extension = avatar.value.split('.').pop().toUpperCase();
            let imgType = [ "JPG", "JPEG", "PNG", "GIF"];
             if ( imgType.indexOf(extension) <0 ){
                 errorAvatar.innerHTML += "¡Debe ingresar un archivo de imagen";
            } 
        }
         // Si hubo errores, no enviar el formulario
         if (errorNombre.innerHTML != "" || errorApellido.innerHTML !="" || errorEmail.innerHTML != "" || errorPassword.innerHTML != "" || errorAvatar.innerHTML != "" ) {
            e.preventDefault(); 
        }
    
    })
})