let toggleDarkMode = document.getElementById("toggleDarkMode")
toggleDarkMode.addEventListener('change', (e) => DarkMode(e))

function DarkMode(e) {
    let body = document.documentElement
    switch (e.target.value) {
        case "dark" : 
            body.style.setProperty('primary-color', '$primary-color-dark');
            break;
        case "light" :
            body.style.setProperty('primary-color', '$primary-color-light)');
            break;
    }
}