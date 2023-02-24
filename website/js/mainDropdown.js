const page = document.getElementsByTagName("html")[0];
const overlay = document.getElementById("overlay");

const dropdown = document.getElementsByClassName("main-nav-dropdown")[0];
const trigger = document.getElementById("nav-dropdown-trigger");
const mobileTrigger = document.getElementById("mobile-trigger")

const dropdownItems = document.getElementsByClassName("js-dropdown-item");
const dropdownClose = document.getElementsByClassName("main-nav-dropdown__close-button")[0];

if(window.innerWidth > 768) { 
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

    for (const item1 of dropdownItems) {
        item1.addEventListener('mouseover', (event) => {
            for (let item2 of dropdownItems) {
                const subSection1 = document.querySelector(`[data-list-id = "${item2.dataset.detail}"]`);
                subSection1.classList.remove('is-selected');
                subSection1.setAttribute('hidden', '');
            }
            dropdown.classList.add('has-visibile-subsection');
            const subSection2 = document.querySelector(`[data-list-id = "${item1.dataset.detail}"]`);
            subSection2.classList.add('is-selected');
            subSection2.removeAttribute('hidden');
        })
    }
}
else {
    mobileTrigger.addEventListener('click', (event) => {   
        overlay.classList.remove('animate-fade-hidden');
        dropdown.classList.add('is-open');
        page.classList.add('nav-open');
    })
    
    dropdownClose.addEventListener('click', (event) => {
        overlay.classList.add('animate-fade-hidden');
        dropdown.classList.remove('is-open');
        page.classList.remove('nav-open');
    })

    for (const item1 of dropdownItems) {
        item1.addEventListener('click', (event) => {
            dropdown.classList.add('has-visibile-subsection');
            const subSection = document.querySelector(`[data-list-id = "${item1.dataset.detail}"]`);
            subSection.classList.add('is-selected');
            subSection.removeAttribute('hidden');
            console.log("subsection-open");

            const backButton = subSection.getElementsByClassName("main-nav-dropdown__subsection-back-button")[0];
            backButton.addEventListener('click', (event) => {
                subSection.classList.remove('is-selected');
                subSection.setAttribute('hidden', '');
                dropdown.classList.remove('has-visibile-subsection');
                console.log("subsection-close");
            })
        })
    } 
}


