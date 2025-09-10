const navPopup = document.getElementById("pop_up")
const btnMenu = document.getElementById("btn_menu")
const headFrame = document.getElementById("head_frame")

btnMenu.addEventListener("click", ()=>{
    if (navPopup.style.display==="none"){
        navPopup.style.display="block";
    }else {
        navPopup.style.display="none";
    }
})