const search = document.getElementsByClassName('search-input--fancy')[0];
const searchResults = document.getElementsByClassName('search-results__container')[0];

search.addEventListener('click', (event) => {
    page.classList.add('search-open');
});

document.addEventListener('click', (event) => {
    if(event.target.closest(".search-input--fancy") || event.target.closest(".search-results__container")) return;
    
    page.classList.remove('search-open');
})

