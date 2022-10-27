// var nombre = "Jorge";
// var apellido = "Tamayo";
// var nombreUsuarioPlatzi = "Jorge tamayo";
// var edad = "24"
// var email = "jorge.dtk0@gmail.com"
// var mayorEdad = true;
// var dineroAhorrado = 6000;
// var deudas = 563;

// var nombreCompleto = nombre + apellido;
// var dineroReal =  dineroAhorrado - deudas;

// console.log("Tu nombre completo es: " + nombreCompleto+ " Y tu dinero real en el banco es: " + dineroReal+" Pesos Mexicanos");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

//const name = "Juan David";
//const lastname = "Castro Gallego";
//const completeName = name + lastname;
//const nickname = "juandc";

//console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var namee = "jorge carlos";
// var lastName="Tamayo"
// var nickname ="Datek0"

// function llamarPersona(namee,lastName,nickname){
//     completeName = namee +" "+ lastName 
    
//     console.log("Me llamo : " + completeName + ", pero prefiero que me digas "+ nickname + ".")
// };

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
// const tipoDeSuscripcion = "Expert";
// if(tipoDeSuscripcion === "Free"){
//     console.log("solo puedes tomar los cursos que son gratis")
// } else if(tipoDeSuscripcion === "Basic"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")
// }else if(tipoDeSuscripcion === "Expert"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año")
// }else{console.log("")}


// var listaDeTipoDeSuscription = ["free", "basic", "expert", "expertPlus"];

// var listaDeTextos = ["solo puedes tomar los cursos que son gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes", "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

// var tipoPersonaSuscrita = "expert";

// for (i=0; i<listaDeTipoDeSuscription.length;++i) {
//  if(tipoPersonaSuscrita===listaDeTipoDeSuscription[i]){
//     console.log("Tu estas suscrito el tipo", listaDeTipoDeSuscription[i], "por lo tanto puedes", listaDeTextos[i]);
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i < 5; i++) {
//   console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//   console.log("El valor de i es: " + i);
// }
// var i=0;
// while(i<=15){
//   console.log("el valor de i es: "+i);
//   i++;

// // }
// i=15
// while(i>=0){
//   console.log("el valor de i es: "+i);
//   i--;

// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  // var numeroInicial = parseInt(prompt("cuanto es 2 + 2?"))

  // while (numeroInicial!= 4){
  //   numeroInicial = parseInt(prompt("cuanto es 2 + 2?"))
  // }

  // console.log("felicidades si era 4")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// listaDeNombresChidos=["Joselius","chinguesaumadreelamerica","el bichosiu","quevuelvaachingarasumadreelamerica", "miguelon","yamencionequechingueasumadreelamerica?puessiquessechingue"];

// function leerArray(array){
//  console.log(array[0]);
// }
// leerArray(listaDeNombresChidos);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// listaDeNombresChidos=["Joselius","chinguesaumadreelamerica","el bichosiu","quevuelvaachingarasumadreelamerica", "miguelon","yamencionequechingueasumadreelamerica?puessiquessechingue"];


// listaDeNombresChidos.forEach(function leerArray(array){

//     console.log(array.parte)
                                                                                          //AMBAS FUNCIONAN
// });

// leerArray();

//listaDeNombresChidos.forEach(function leerArray(array){


//   listaDeNombresChidos=["Joselius","chinguesaumadreelamerica","el bichosiu","quevuelvaachingarasumadreelamerica", "miguelon","yamencionequechingueasumadreelamerica?puessiquessechingue"];

// function leerArray(array){
 
//   for(dato of array){
//     console.log(dato);
//   }
 
// }

// leerArray(listaDeNombresChidos);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var objetoSiu ={
  nombre: "Objetochidosiu",
  color: "rojochidosiu",
  tamanio: "tamaniochidosiu",
  dureza: "durezachidasiu",
  material:"carton"

};

function leerObjetochidosiu(datos){
  for(dato in datos){
    console.log(`${dato}= ${datos[dato]}`);
  }
}
 
leerObjetochidosiu(objetoSiu);








