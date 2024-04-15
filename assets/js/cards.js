const btnCardUp = document.getElementById('btn__cards--up');
const btnCardDown = document.getElementById('btn__cards--down');
const cards = document.querySelectorAll('#cards__item');
const cardsInfo = document.querySelectorAll('#card__info')
let cardAtual = 0;

function esconderItemSelecionado() {
    const itemSelecionado = document.querySelector('.card__ativo');
    itemSelecionado.classList.remove('card__ativo');
    const infoSelecionado = document.querySelector('.card__info--ativo');
    infoSelecionado.classList.remove('card__info--ativo')
}

function mostrarItem(indiceItem){
    cards[indiceItem].classList.add('card__ativo')
    cardsInfo[indiceItem].classList.add('card__info--ativo')
}

btnCardUp.addEventListener('click', function(){
    if (cardAtual === cards.length -1) return;

    esconderItemSelecionado();

    cardAtual++;

    mostrarItem(cardAtual);
})

btnCardDown.addEventListener('click', function(){
    if (cardAtual === 0) return;

    esconderItemSelecionado();

    cardAtual--;

    mostrarItem(cardAtual);
})


// const btnCardUp = document.getElementById('btn__cards--up');
// const btnCardDown = document.getElementById('btn__cards--down');
// const cards = document.querySelectorAll('#cards__item');
// let cardAtual = 0;

// function esconderItemSelecionado() {
//     const itemSelecionado = document.querySelector('.card__ativo');
//     itemSelecionado.classList.remove('card__ativo');
// }

// function mostrarItem(indiceItem){
//     cards[indiceItem].classList.add('card__ativo')
// }

// btnCardUp.addEventListener('click', function(){
//     if (cardAtual === cards.length -1) return;

//     esconderItemSelecionado();

//     cardAtual++;

//     mostrarItem(cardAtual);
// })

// btnCardDown.addEventListener('click', function(){
//     if (cardAtual === 0) return;

//     esconderItemSelecionado();

//     cardAtual--;

//     mostrarItem(cardAtual);
// })