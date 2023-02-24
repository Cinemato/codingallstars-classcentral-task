const signupDropdown = document.getElementById("signup-dropdown")
const signupTrigger = document.getElementById("signup-dropdown-trigger");
const signupClose = document.getElementById("signup-dropdown-close");
const signupLists = document.getElementById("signup-dropdown-lists");

const closeSignupDropdown = () => {
    signupDropdown.classList.add("animate-fade-entered");
    signupDropdown.classList.remove("animate-fade-hidden");

    signupClose.classList.add("animate-fade-hidden");
    signupClose.classList.remove("animate-fade-entered");

    signupLists.classList.add("animate-fade-hidden");
    signupLists.classList.remove("animate-fade-entered");

    overlay.classList.add('animate-fade-hidden');
    overlay.classList.remove('animate-fade-entered');
}

signupTrigger.addEventListener('click', (event) => {
    if(signupDropdown.classList.contains("animate-fade-hidden")){
        closeSignupDropdown();
        return;
    }
    signupDropdown.classList.remove("animate-fade-entered");
    signupDropdown.classList.add("animate-fade-hidden");

    signupClose.classList.remove("animate-fade-hidden");
    signupClose.classList.add("animate-fade-entered");

    signupLists.classList.remove("animate-fade-hidden");
    signupLists.classList.add("animate-fade-entered");

    overlay.classList.remove('animate-fade-hidden');
    overlay.classList.add('animate-fade-entered');
});

document.addEventListener('click', (event) => {
    if(event.target.closest("#signup-clickaway") || event.target.closest("#signup-dropdown")) return;
    
    closeSignupDropdown();
})