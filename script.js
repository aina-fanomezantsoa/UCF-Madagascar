const navPopup = document.getElementById("pop_up")
const btnMenu = document.getElementById("btn_menu")
const recherche = document.getElementById("reach")
const nav = document.getElementById("navigation")
const head = document.getElementById("head")
const navAcceuil=document.getElementById("navAcceuil")

btnMenu.addEventListener("click", ()=>{
    navPopup.classList.toggle("menu_clicked");
    btnMenu.classList.toggle("focus");
})