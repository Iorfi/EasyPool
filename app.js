// Detalles en las vistas

document.querySelector(".burgerButon").addEventListener("click", () => {

    document.querySelector(".navCeluCompu").classList.toggle("show"); 

})
document.querySelector(".btnFooter").addEventListener("click", () => {

    alert ("Tenés que iniciar sesión para enviar tu consulta") 
 
 })

ScrollReveal().reveal('.contfotosMain');
ScrollReveal().reveal('.mainCards', {delay:500});
ScrollReveal().reveal('.news', {delay:500});


// Hora exacta

let currentDate = new Date();
let minute = currentDate.getMinutes();
let hours = currentDate.getHours();
let date = currentDate.getDate();
let month = (currentDate.getMonth() +1); // +1
let year = currentDate.getFullYear();

let dateString = date + "-" + month + "-" + year;
let time = hours + ":" + minute ;


// Api de feriados

    fetch('http://nolaborables.com.ar/api/v2/feriados/2022')
    .then(response => response.json())
    .then(json => console.log(json))	
    .catch(err => console.error(err));
