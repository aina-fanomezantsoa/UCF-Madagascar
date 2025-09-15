const navPopup = document.getElementById("pop_up");
const btnMenu = document.getElementById("btn_menu");
const send = document.getElementById("btnSend");
const objet =document.getElementById("objet");
const message = document.getElementById("message");
let email = "ainafanomezantsoa37@gmail.com";
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
        alert("Message envoyé!! Objet = "+ objet.value)

        objet.value="";
        message.value="";
    }
    
})
function envoyerEmail(){
    window.onload = function(){
        send.addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
    }
}

btnFormation.addEventListener("click", ()=>{
    formation.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });
})