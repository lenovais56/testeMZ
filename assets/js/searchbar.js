let searchBarOpen = document.getElementById('btn--searchbar');
let searchBar = document.getElementById('search--bar');
let btnSearchClose = document.getElementById('searchbar--close');

searchBarOpen.addEventListener('click', function() {
    if(searchBar.classList.contains('searchbar__open')==false){
        searchBar.classList.add('searchbar__open');
    }
});

btnSearchClose.addEventListener('click', function() {
    if(searchBar.classList.contains('searchbar__open')==true){
        searchBar.classList.remove('searchbar__open');
    }
});

/*Mobile*/

let searchBarOpenMobile = document.getElementById('btn__searchbar--mobile');
let searchBarMobile = document.getElementById('search__bar--mobile');
let btnSearchCloseMobile = document.getElementById('searchbar__close--mobile');