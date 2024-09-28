const button = document.querySelector(".header_nav_mobile_button")
const menu = document.querySelector(".header_nav_mobile_content")
const buttonText = button.querySelector(".mobile_button_text")
const palki = button.querySelector(".box_devider")
let menuOpen = false;
button.addEventListener("click", function(){
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.classList.add("menu_open")
        buttonText.textContent = "Закрити"
        palki.classList.add("active")
        document.body.style.overflow = "hidden"
    }
    else{
        menu.classList.remove("menu_open")
        palki.classList.remove("active")
        buttonText.textContent = "Меню"
        document.body.style.overflow = ""
    }
})

