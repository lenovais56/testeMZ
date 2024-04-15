//Menu aberto

function menuShow() {
    let menuLista = document.querySelector('.menu__lista--mobile');

    if(menuLista.classList.contains('open')) {
        menuLista.classList.remove('open');
        document.querySelector('.btn__menu').innerHTML = 'menu';
    } else {
        menuLista.classList.add('open');
        document.querySelector('.btn__menu').innerHTML = 'close';
    }
};

//Dropdown mobile

document.getElementById('btn__submenu').addEventListener('click', function() {
    document.getElementById('dropdown__mobile').classList.toggle('dropdown__mobile--ativo');
})