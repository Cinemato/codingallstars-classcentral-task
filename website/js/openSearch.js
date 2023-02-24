const search = document.getElementsByClassName('search-input--fancy')[0];
const searchResults = document.getElementsByClassName('search-results__container')[0];
const backButton = document.getElementsByClassName('search-results__small-header-back')[0];

search.addEventListener('click', (event) => {
    page.classList.add('search-open');
});

if(window.innerWidth <= 768){
    backButton.addEventListener('click', (event) => {
        page.classList.remove('search-open');
    })
}

document.addEventListener('click', (event) => {
    if(event.target.closest(".search-input--fancy") || event.target.closest(".search-results__container")) return;
    
    page.classList.remove('search-open');
})


