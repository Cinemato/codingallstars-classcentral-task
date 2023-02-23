const page = document.getElementsByTagName("html")[0];
const overlay = document.getElementById("overlay");

const dropdown = document.getElementsByClassName("main-nav-dropdown")[0];
const trigger = document.getElementById("nav-dropdown-trigger");

const dropdownItems = document.getElementsByClassName("js-dropdown-item");
const subSections = document.getElementsByClassName("main-nav-dropdown__subsection");

trigger.addEventListener('mouseover', (event) => {
    overlay.classList.remove('animate-fade-hidden');
    dropdown.classList.add('is-open');
    page.classList.add('nav-open');
})

trigger.addEventListener('mouseout', (event) => {
    overlay.classList.add('animate-fade-hidden');
    dropdown.classList.remove('is-open');
    page.classList.remove('nav-open');
})

for (const item of dropdownItems) {
    item.addEventListener('mouseover', (event) => {
        dropdown.classList.add('has-visibile-subsection');
        const subSection = document.querySelector(`[data-list-id = "${item.dataset.detail}"]`);
        subSection.classList.add('is-selected');
        subSection.removeAttribute('hidden');
    })

    item.addEventListener('mouseout', (event) => {
        dropdown.classList.remove('has-visibile-subsection');
        const subSection = document.querySelector(`[data-list-id = "${item.dataset.detail}"]`);
        subSection.classList.remove('is-selected');
        subSection.setAttribute('hidden', '');
    })
}


