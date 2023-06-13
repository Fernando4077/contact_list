alert("Lista De Contacto");
let contactos = [ "Arihana Gamez", "Lohana Gamez" , "Carolina Zepeda"];
console.log(contactos);

//funcion agregar contacto 

 contactos.push("Magda Fernandez");
  
 //funcion borrar contactos

 function eliminarcontactos(borrar) {
    contactos.pop();
 }
console.log(contactos);

 //eliminarcontactos(1);
 //console.log(contactos);

 //imprimir
 function imprimircontactos(){
    console.log(contactos);
 }
 imprimircontactos();

