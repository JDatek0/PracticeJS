var nombre = "Jorge";
var apellido = "Tamayo";
var nombreUsuarioPlatzi = "Jorge tamayo";
var edad = "24"
var email = "jorge.dtk0@gmail.com"
var mayorEdad = true;
var dineroAhorrado = 6000;
var deudas = 563;

var nombreCompleto = nombre + apellido;
var dineroReal =  dineroAhorrado - deudas;

console.log("Tu nombre completo es: " + nombreCompleto+ " Y tu dinero real en el banco es: " + dineroReal+" Pesos Mexicanos");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

//const name = "Juan David";
//const lastname = "Castro Gallego";
//const completeName = name + lastname;
//const nickname = "juandc";

//console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var namee = "jorge carlos";
var lastName="Tamayo"
var nickname ="Datek0"

function llamarPersona(namee,lastName,nickname){
    completeName = namee +" "+ lastName 
    
    console.log("Me llamo : " + completeName + ", pero prefiero que me digas "+ nickname + ".")
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const tipoDeSuscripcion = "Basic";

//switch (tipoDeSuscripcion) {
  // case "Free":
    //   console.log("Solo puedes tomar los cursos gratis");
      // break;
   //case "Basic":
       //console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  //     break;
   //case "Expert":
     //  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//       break;
   //case "ExpertPlus":
     //  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
      // break;
//}
const tipoDeSuscripcion = "Expert";
if(tipoDeSuscripcion === "Free"){
    console.log("solo puedes tomar los cursos que son gratis")
} else if(tipoDeSuscripcion === "Basic"){
    console.log("solo puedes tomar los cursos que son grais")
}else if(tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
}else{console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")}







