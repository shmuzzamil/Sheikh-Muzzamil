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



// sub menu script starts 


function showSubMenu() {

    const upArrow = document.getElementById("submenu-button-up-icon")
const downArrow = document.getElementById("submenu-button-down-icon")

const subMenu = document.getElementById("header-sub-menu")

    subMenu.style.display = "flex"
    upArrow.style.display = "flex"
    downArrow.style.display = "none"

    console.log("menuOpen")

}
function hideSubMenu(){

    const upArrow = document.getElementById("submenu-button-up-icon")
const downArrow = document.getElementById("submenu-button-down-icon")

const subMenu = document.getElementById("header-sub-menu")
    subMenu.style.display = "none"
    upArrow.style.display = "none"
    downArrow.style.display = "flex"

    console.log("menuClose")

}


// sub menu script ends 

