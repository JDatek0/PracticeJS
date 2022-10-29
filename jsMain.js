const h1 = document.querySelector('h1')
const inp1 = document.querySelector('#inpNumero1');
const inp2 = document.querySelector('#inpNumero2');
const btnCalcular = document.querySelector('#btnCalcular'); 
const h3Resultl = document.querySelector('#result');

function btnOnClick(){
    let resultado;
    resultado = parseInt(inp1.value ) + parseInt( inp2.value);
    h3Resultl.textContent = resultado;
}
