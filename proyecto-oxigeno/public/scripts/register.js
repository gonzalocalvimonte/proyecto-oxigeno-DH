const usersApi = require("../../src/controllers/api/users.api");

window.addEventListener("load",  function() {
 
    let formulario = document.querySelector("form.form-reg");

    formulario.addEventListener("submit", async function (e) {

        e.preventDefault(); 

        // Validación Nombre
        let nombre = document.querySelector("#nombre");
        let errorNombre = document.querySelector("#errorNombre");
        errorNombre.innerHTML = "";
        if ( nombre.value == "") {
            errorNombre.innerHTML += "Por favor, ingresá tu nombre.";
            
        } else if ( nombre.value.length < 2 ){
            errorNombre.innerHTML += "Tu nombre no puede tener menos de 2 letras.";
            
        } 
        //Validación Apellido
        let apellido = document.querySelector("#apellido");
        let errorApellido = document.querySelector("#errorApellido");
        errorApellido.innerHTML = "";
        if ( apellido.value == "") {
          errorApellido.innerHTML += "Por favor, ingresá tu apellido.";
          
        } else if ( apellido.value.length < 2 ){
            errorApellido.innerHTML += "Tu apellido no puede tener menos de 2 letras.";
        }
        // Validación email

        try {
            let peticion = await fetch('http://localhost:3000/api/users')
            let respuesta = await peticion.json();
            let usersApi = respuesta.data;
        } catch (error) {
            console.log(error);
        }
            
        let email = document.querySelector("#email");
        let errorEmail = document.querySelector("#errorEmail");
        errorEmail.innerHTML = "";
        if ( email.value == "") {
          errorEmail.innerHTML += "Por favor, ingresá tu mail.";
          
        } else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))  {
            errorEmail.innerHTML += "Por favor, ingresá una dirección de mail válida.";
        } else if ( usersApi.includes(email.value))  {
            errorEmail.innerHTML += "Ese email ya está registrado";
        }

        //Validación Password
        let password = document.querySelector("#password");
        let errorPassword = document.querySelector("#errorPassword");
        errorPassword.innerHTML = "";
        if ( password.value == "") {
            errorPassword.innerHTML += "Por favor, ingresá una contraseña."
        } else if ( password.value.length < 8 ){
                    errorPassword.innerHTML += "La contraseña debe tener al menos 8 caracteres";

        } else if ( /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value) === false ) {
           
            errorPassword.innerHTML += 
                "La contraseña debe tener mayúsculas, minúsculas, un número y un carácter especial";
        }
       
         //Validación Nacimiento
        let nacimiento = document.querySelector("#nacimiento");
        let errorNacimiento = document.querySelector("#errorNacimiento");
        errorNacimiento.innerHTML = "";
        if ( nacimiento.value == "") {
          errorNacimiento.innerHTML += "Por favor, ingresá tu fecha de nacimiento.";
        } 
        
        //Validación Domicilio
        let domicilio = document.querySelector("#domicilio");
        let errorDomicilio = document.querySelector("#errorDomicilio");
        errorDomicilio.innerHTML = "";
        if ( domicilio.value == "") {
            errorDomicilio.innerHTML += "Por favor, ingresá tu domicilio.";
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
         // Si no hubo errores, enviar el formulario
         if (errorNombre.innerHTML == "" && errorApellido.innerHTML == "" &&  errorEmail.innerHTML == "" && errorPassword.innerHTML == "" && errorNacimiento.innerHTML == "" && errorDomicilio.innerHTML == "" && errorAvatar.innerHTML == "") {
            formulario.submit(); 
        }
    
    });

    let eyeButton = document.querySelector("#togglePasswordView");

    eyeButton.addEventListener("click", function () {
        let password = document.getElementById("password");  
        let type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        this.classList.toggle('fa-eye-slash');
        
    })
})

