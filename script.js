//menu-mobile


const menuDiv = document.getElementById('menu-mobile');

menuDiv.addEventListener('click', anim);

function anim() {
    menuDiv.classList.toggle('abrir');
}


//modo escuro



let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let header = document.querySelector('header');

trilho.addEventListener('click', () => {
    trilho.classList.toggle('escuro');
    body.classList.toggle('escuro');
    header.classList.toggle('escuro');
})


