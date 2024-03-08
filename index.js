const toggleButton = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    
    document.body.classList.add('darkmode');

    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {

    document.body.classList.remove('darkmode');

    localStorage.setItem('darkMode', 'disabled');
};

toggleButton.addEventListener('click', () => {
    if (localStorage.getItem('darkMode') !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});