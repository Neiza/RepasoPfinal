var inputNombre = document.getElementById("nombre");
var inputApellido = document.getElementById("apellido");
var inputEmail = document.getElementById("email");
var inputPassword = document.getElementById("password");

var spanNombre = document.getElementById("spanName");
var spanApellido = document.getElementById("spanLastName");
var spanEmail = document.getElementById("spanEmail");
var spanPassword = document.getElementById("spanPassword");

var botonRegistro = document.getElementById("registro");

function ObjetoCoder(nombre, apellido, email, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
}

function validarNombreApellido (){
        var soloLetras = function(e){
          var codigoTecla=e.keyCode;
                if((codigoTecla>=97 && codigoTecla<=122)||(codigoTecla>=65 && codigoTecla<=90)||codigoTecla==39 || codigoTecla==32){
                    return true;

                } else{
                    return false;
                }
          }
          nombre.onkeypress = soloLetras;
          apellido.onkeypress = soloLetras;
}

function validarEmailPassword(){
          var expressionEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          var expressionPassword  =/^[A-Za-z0-9_]{6,20}$/;

          if (!expressionEmail.test(inputEmail.value)){
              alert("Ingresa un e-mail válido");
              }
          if (!expressionPassword.test(inputPassword.value)){
             alert("La contraseña de tener de 6 a 20 caracteres");
             }
  }


  function validaciones(){
        var inputs = document.getElementsByClassName("inputs");
            for (var i = 0; i<inputs.length; i++){
                if(inputs[i].value.trim().length==0){
                    alert("LLene todos los campos")
                }
                break;
            }
    }




window.addEventListener("load",function(){
      validarNombreApellido();
      botonRegistro.addEventListener("click", function(event){
            event.preventDefault();
            validaciones()
            validarEmailPassword();
            ObjetoCoder(nombre,apellido,email,password);
            var nombre = inputNombre.value.toUpperCase();
            var apellido = inputApellido.value.toUpperCase();
            var email = inputEmail.value;
            var password = inputPassword.value ;
            new ObjetoCoder (nombre, apellido, email, password);
            if(nombre.length!=0 && apellido.length!=0 && email.length!=0 && password.length!=0){

            console.log(new ObjetoCoder(nombre, apellido, email, password))
			      localStorage.setItem("nuevoCoder",JSON.stringify(new ObjetoCoder(nombre,apellido,email,password)))
		        document.getElementById("form").reset();
            window.location = "bienvenidaCoder.html"
          }
          else {
            alert("Llenar todos los campos")
          }
      });

});
