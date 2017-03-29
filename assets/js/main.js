var botonRegistrar = document.getElementById("registrar");

function registrar(){
      window.location = "registro.html"
}

window.addEventListener("load", function(){
      botonRegistrar.addEventListener("click", function(event){
              event.preventDefault();
              registrar();
      });
});
