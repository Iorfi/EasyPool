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

let currentDate = new Date();
let month = currentDate.getMonth(); // +1

    fetch('https://nolaborables.com.ar/api/v2/feriados/2022?formato=mensual')
    .then(response => response.json())
    .then(json => {

        let diaFeriado = []
        let mesFeriado = []

        for (let i = 1; i < 32; i++) {

            if (json[month][i] != undefined) {

            console.log(i)
            console.log(json[month][i]["motivo"])

            diaFeriado.push  (i + "/" + (month +1))
            mesFeriado.push  ( json[month][i]["motivo"])
        }
          }   

          document.getElementById("diaFeriado0").innerHTML = diaFeriado[0]
          document.getElementById("motivoFeriado0").innerHTML = mesFeriado[0]

          document.getElementById("diaFeriado1").innerHTML = diaFeriado[1]
          document.getElementById("motivoFeriado1").innerHTML = mesFeriado[1]

          if (diaFeriado[2] != undefined) {
          document.getElementById("diaFeriado2").innerHTML = diaFeriado[2]
          document.getElementById("motivoFeriado2").innerHTML = mesFeriado[2]
        }
      }
    )	
    .catch(err => console.error(err));

