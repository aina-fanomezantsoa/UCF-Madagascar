const navPopup = document.getElementById("pop_up");
const btnMenu = document.getElementById("btn_menu");
const send = document.getElementById("btnSend");
const objet =document.getElementById("objet");
const message = document.getElementById("message");
const formation = document.getElementById("formation");
const btnFormation = document.getElementById("btnFormation");

btnMenu.addEventListener("click", ()=>{
    navPopup.classList.toggle("menu_clicked");
    btnMenu.classList.toggle("focus");
})
send.addEventListener("click", ()=>{
    if (objet.value === "" | message.value === ""){
        return;
    }else{
        const destinataire = "univcfm@gmail.com";
        const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(objet.value)}&body=${encodeURIComponent(message.value)}`;
        window.open(mailtoLink, "_blank");

        objet.value="";
        message.value="";
    }
    
})
