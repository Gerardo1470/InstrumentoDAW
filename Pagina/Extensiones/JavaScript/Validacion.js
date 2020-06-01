var nombre = document.getElementById('nombre').value;
var apellido = document.getElementById('apellido').value;
var direccion = document.getElementById('direccion').value;
var phone = document.getElementById('phone').value;
var mail = document.getElementById('mail').value;

function sendForm(){
     
     if (nombre.value == null || nombre.value == ''){
        alert('Ingresa nombre...!');
     }else if (nombre.value.length > 25){
        alert('El nombre no debe exceder de 25 caracteres.')
     }
     
     if (apellido.value == null || apellido.value == ''){
        alert('Ingresa apellido...!');
     }else if (apellido.value.length > 30){
        alert('El nombre no debe exceder 30 caracteres.')
     }

     if (direccion.value == null || direccion.value ==' '){
        alert('Ingrese direccion...!');
     }

     if (phone.value == null || phone.value ==''){
        alert('Ingrese numero de celular...!');
    }

     if(mail.value ==null || mail.value ==''){
        alert('Escribir Email');
     }

}

//Validar Email
function validarEmail(texto) {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(texto)){
    return 1;
   } else {
    return 0;
   }
 }

