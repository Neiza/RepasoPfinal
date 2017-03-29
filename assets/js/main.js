var botonRegistrar = document.getElementById("registrar");
var inicia = document.getElementById("sesion");

function registrar(){
      window.location = "registro.html"
}

function inicia (){
  window.location = "inicioSesion.html"
}

window.addEventListener("load", function(){
      botonRegistrar.addEventListener("click", function(event){
              event.preventDefault();
              registrar();
      });
      inicia.addEventListener("click",function(event){
              event.preventDefault();
              inicia ();
      });
});
