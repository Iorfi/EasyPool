
document.querySelector(".burgerButon").addEventListener("click", () => {

    document.querySelector(".navCeluCompu").classList.toggle("show"); 

})
document.querySelector(".btnFooter").addEventListener("click", () => {

    alert ("Tenés que iniciar sesión para enviar tu consulta") 
 
 })

ScrollReveal().reveal('.contfotosMain');
ScrollReveal().reveal('.mainCards', {delay:500});
ScrollReveal().reveal('.news', {delay:500});



//fetch('https://restcountries.com/v3.1/all')
//.then(response => response.json())
//.then(data => console.log(data));


let currentDate = new Date();
let minute = currentDate.getMinutes();
let hours = currentDate.getHours();
let date = currentDate.getDate();
let month = currentDate.getMonth(); // +1
let year = currentDate.getFullYear();

let dateString = date + "-" +(month + 1) + "-" + year;
let time = hours + ":" + minute ;

addEventListener



