const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafo2 = document.querySelector('.parrafo2');
const messi = document.querySelector('#messi');
const input = document.querySelector('input');

console.log(input.value)
console.log({

    h1,
    p,
    parrafo2,
    messi,
    input
})

h1.innerText = 'mesiculeiro <p>Joselito Pies de plata</p>';

// console.log(h1.getAttribute('equipo'))
// h1.setAttribute('equipo','RM')

h1.classList.add('RM')
h1.classList.remove('PSG')
input.placeholder = "venedicto"

const imagenarch = document.createElement('img');
imagenarch.setAttribute('src','./arc.png')

imagenarch.setAttribute('width','200px',);
imagenarch.setAttribute('height','100px');
parrafo2.replaceWith(imagenarch)

