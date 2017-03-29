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
          var expressionPassword6Characters  =/^[A-Za-z0-9_]{6,12}$/;

          if (!expressionEmail.test(inputEmail.value)){
              alert("Ingresa un e-mail válido");
              }
          if (!expressionEmail.test(inputEmail.value)){
             alert("La contraseña de tener de 6 a 12 caracteres");
             }
    /*         var validacionInput = function(){
             		if(this.value.trim().length==0){
             			this.value ="";
             			alert("*Este campo es obligatorio") ;
             		}
             		/*		var datoCorrecto = this.value.charAt(0).toUpperCase()+this.value.substring(1).toLowerCase();
             		this.value=datoCorrecto;
             		if(this.getAttribute("type")=="text"){
             			var arrDato = this.value.split(" ");
             			var datoConMayusculas = "";
             			for(var i = 0; i<arrDato.length;i++){
             				datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
             			}
             			this.value=datoConMayusculas.trim();
             		}
             	}*/
}


window.addEventListener("load",function(){
      validarNombreApellido();
      botonRegistro.addEventListener("click", function(event){
            event.preventDefault();
            validarEmailPassword();
            ObjetoCoder(nombre,apellido,email,password);
            new ObjetoCoder (inputNombre.value, inputApellido. value, inputEmail.value, inputPassword.value);
            console.log(new ObjetoCoder(inputNombre.value, inputApellido.value, inputEmail.value, inputPassword.value))
			      localStorage.setItem("nuevoCoder",JSON.stringify(new ObjetoCoder(inputNombre.value,inputApellido.value,inputEmail.value,inputPassword.value)))
		        document.getElementById("form").reset();
            window.location = "bienvenidaCoder.html"
      });

});
