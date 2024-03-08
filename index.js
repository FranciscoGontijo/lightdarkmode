let darkMode = localStorage.getItem('darkMode');

const toggleButton = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    
    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode', 'disabled');
};

//Stay in dark mode if local storage says it is enabled
if (darkMode === 'enabled') {
    enableDarkMode();
};

toggleButton.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});