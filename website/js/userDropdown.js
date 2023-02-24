const userTrigger = document.getElementById('user-dropdown-trigger');
const userContainer = document.getElementById('user-dropdown-container');
const userClose = document.getElementById('user-dropdown-close');
const userDropdown = document.getElementById('user-dropdown');

userContainer.addEventListener('click', (event) => {
    if(userDropdown.classList.contains("animate-fade-entered")){
        closeUserDropdown();
        return;
    }

    overlay.classList.remove('animate-fade-hidden');
    overlay.classList.add('animate-fade-entered');

    userTrigger.classList.remove('animate-fade-entered');
    userTrigger.classList.add('animate-fade-hidden');

    userClose.classList.remove('animate-fade-hidden');
    userClose.classList.add('animate-fade-entered');

    userDropdown.classList.remove('animate-fade-hidden');
    userDropdown.classList.add('animate-fade-entered');
});

const closeUserDropdown = () => {
    overlay.classList.add('animate-fade-hidden');
    overlay.classList.remove('animate-fade-entered');

    userTrigger.classList.add('animate-fade-entered');
    userTrigger.classList.remove('animate-fade-hidden');

    userClose.classList.add('animate-fade-hidden');
    userClose.classList.remove('animate-fade-entered');

    userDropdown.classList.add('animate-fade-hidden');
    userDropdown.classList.remove('animate-fade-entered');
}

document.addEventListener('click', (event) => {
    if(event.target.closest("#signup-clickaway")) return;
    
    closeUserDropdown();
})