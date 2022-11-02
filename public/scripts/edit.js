window.addEventListener("load", function() {
 
    let formulario = document.querySelector("form.formAddProd");

    formulario.addEventListener("submit", function (e) {
        
        // Validación del nombre del producto
        let name = document.querySelector("#name");

        let errorName = document.querySelector("#errorName");
        errorName.innerHTML = "";
        if ( name.value == "") {
          errorName.innerHTML += "¡Debe ingresarse nombre del producto!";
          
        } else if ( name.value.length < 5){
        errorName.innerHTML += "<p>" + "¡El nombre no puede tener menos de 5 caracteres!" + "</p>";
    
        }
        // Validación de la descripción del producto 
        let description = document.querySelector("#description");

        let errorDescription = document.querySelector("#errorDescription");
        errorDescription.innerHTML = "";
        if ( description.value == "") {
          errorDescription.innerHTML += "¡Debe ingresarse descripción del producto!";
          
        } else if ( description.value.length < 20){
        errorDescription.innerHTML += "<p>" + "¡La descripción no puede tener menos de 20 caracteres!" + "</p>";
    
        }
        // Validación de la imagen del producto 

        /*let image = document.querySelector("#fotoProd");
        let errorImage = document.querySelector("#errorImage");

        errorImage.innerHTML = "";
        if ( image.value != "" ) {
            let extension = image.value.split('.').pop().toUpperCase();
            let imgType = [ "JPG", "JPEG", "PNG", "GIF"];
             if ( imgType.indexOf(extension) <0 ){
                 errorImage.innerHTML += "¡Debe ingresar un archivo de imagen";
            } 
        } */
        if (errorName.innerHTML !="" || errorDescription.innerHTML !="" || errorImage.innerHTML != ""){
            e.preventDefault();
        }
    })
}
)