window.addEventListener("load", function() {
 
    let formulario = document.querySelector("form.formAddProd");

    formulario.addEventListener("submit", function (e) {
        
        // Validación del nombre del producto
        let name = document.querySelector("#name");

        errorName = document.querySelector("#errorName");
        errorName.innerHTML = "";
        if ( name.value == "") {
          errorName.innerHTML += "¡Debe ingresarse nombre del producto!";
          
        } else if ( name.value.length < 5){
        errorName.innerHTML += "<p>" + "¡El nombre no puede tener menos de 5 caracteres!" + "</p>";
    
        }
        // Validación de la descripción del producto 
        let description = document.querySelector("#description");

        errorDescription = document.querySelector("#errorDescription");
        errorDescription.innerHTML = "";
        if ( description.value == "") {
          errorDescription.innerHTML += "¡Debe ingresarse descripción del producto!";
          
        } else if ( description.value.length < 20){
        errorDescription.innerHTML += "<p>" + "¡La descripción no puede tener menos de 20 caracteres!" + "</p>";
    
        }
        // Validación de la imagen del producto 

        let image = document.querySelector("#fotoProd");

        errorImage = document.querySelector("#errorImage");
        errorImage.innerHTML = "";
        let extension = image.files[0].type;
        
        if ( ! extension.includes("image")){
            errorimage.innerHTML += "¡Debe ingresar una imagen!";
        } 
        if (errorName.innerHTML !="" || errorDescription.innerHTML !="" || errorImage.innerHTML != ""){
            e.preventDefault();
        }
    })
}
)