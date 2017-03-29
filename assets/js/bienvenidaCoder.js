  var editar = document.getElementById("editar");

  window.addEventListener("load", function(){
        var spanNombre = document.getElementById("nombreCoder");
        var spanApellido = document.getElementById("apellidoCoder");
        var spanEmail= document.getElementById("emailCoder");
        var spanPassword = document.getElementById("passwordCoder");

        var objectCoder = JSON.parse(localStorage.getItem("nuevoCoder"));
        console.log(objectCoder);
        spanNombre.innerText = objectCoder.nombre;
        spanApellido.innerText = objectCoder.apellido;
        spanEmail.innerText = objectCoder.email;
        spanPassword.innerText = objectCoder.password;


        editar.addEventListener("click", function(event){
            event.preventDefault;
            window.location = "editar.html"

        });
});
