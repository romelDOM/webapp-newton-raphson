const botonInfo = document.getElementById('info');
const botonGuia = document.getElementById('guia');

document.addEventListener('DOMContentLoaded', function(){
    botonInfo.addEventListener('click', function(){
        toggleMenu('aside-info');
    });
    botonGuia.addEventListener('click', function(){
        toggleMenu('aside-guia');
    });
});

function toggleMenu(id){
    const aside = document.getElementById(id);
    aside.classList.toggle('activo');
}