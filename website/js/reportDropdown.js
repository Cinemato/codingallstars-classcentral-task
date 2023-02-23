const reportDropdown = document.getElementById('report-dropdown');
const reportTrigger = document.getElementById('report-dropdown-trigger');

reportTrigger.addEventListener('mouseover', (event) => {
    reportDropdown.classList.remove('animate-fade-hidden');
    overlay.classList.remove('animate-fade-hidden');

    reportDropdown.classList.add('animate-fade-entered');
    overlay.classList.add('animate-fade-entered');
});

reportTrigger.addEventListener('mouseout', (event) => {
    reportDropdown.classList.add('animate-fade-hidden');
    overlay.classList.add('animate-fade-hidden');

    reportDropdown.classList.remove('animate-fade-entered');
    overlay.classList.remove('animate-fade-entered');
});