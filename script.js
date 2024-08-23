function loadElements() {
    fetch('/components/header/index.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

loadElements()



function openHamburgerMenu() {

    const mobileMenu = document.getElementById('nav-bar-wrapper')

    mobileMenu.style.display = "block"

}
function closeHamburgerMenu() {
    const mobileMenu = document.getElementById('nav-bar-wrapper')

    mobileMenu.style.display = "none"

}


