const h1 = document.querySelector('h1')
const form1 = document.querySelector('#form1')
const inp1 = document.querySelector('#inpNumero1');
const inp2 = document.querySelector('#inpNumero2');
const btnCalcular = document.querySelector('#btnCalcular'); 
const h3Resultl = document.querySelector('#result');
const loremCopy = document.querySelector('#loremCopy');

form1.addEventListener('submit', formSumar);
inp1.addEventListener('paste', pasties);
inp2.addEventListener('paste', pasties);
h1.addEventListener('dblclick',dblclick);

function formSumar(event){
    event.preventDefault();
    //console.log(event)
    let resultado;
    resultado = parseInt(inp1.value ) + parseInt( inp2.value);
    h3Resultl.textContent = resultado;
}

loremCopy.addEventListener('copy',copies)


function copies(){
    let mensajeCopy = 'Este texto no es muy largo copialo a mano no uses el crtl + c';
    confirm(mensajeCopy);
}

function pasties(){
    let mensajeAlert = 'Oye eres muy inteligente , hiciste lo que te dijimos que no hagas, bravo te lleavremos a la nasa';
    alert(mensajeAlert);
}

function dblclick(){
    h1.textContent = 'felicidades has echo doble click';
}
