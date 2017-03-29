var registrado = document.getElementById("registrado");
var registrate = document.getElementById("registrate");
var correo = document.getElementById("correo");
var contraeña = document.getElementById("contraseña")

window.addEventListener("load", function(){
      correo.disabled = true;
      contraseña.disabled = true;
      registrado.addEventListener("click", function(){
              correo.disabled = false;
              contraseña.disabled = false;
              correo.focus();
      });

      registrate.addEventListener("click", function(){
              window.location = "registro.html"
      });
});
