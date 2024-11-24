//alert("Este é um exercíico do js do curso em vídeo")

var relogio = newDate()
var  hora = relogio.getHours()
var minuto = relogio.getMinutes()

window.document(`Agora são ${hora} horas e ${minuto} minutos`)

function horario (){
var p = window.document.querySelector("#horario")
var img = window.document.getElementById("foto")

var relogio = new Date()
var hora = relogio.getHours()
var minuto = relogio.getMinutes()

p.innerHTML = (`Agora são ${hora} e ${minuto}`)

if(hora > 4 && hora < 12){
 img.src = "fotos/pexels-pixabay-69832.jpg"
document.body.style.background = "#F6D300"
} 
else if (hora >= 12 && hora <= 18){
img.src = "fotos/belgium-g85b6bbcab_1280.jpg"
document.body.style.background = "#E3C594" 

}
else if (hora > 18 && hora <=23){
img.src = "fotos/szechenyi-chain-bridge-g0acbbd016_1280.jpg"
document.body.style.background = "#1F0800"
}
else {
    p.innerHTML= "Está de madrugada vá dormir"
    img.src = foto
}
}
// Alguém comentou no vídeo: Exercícios JavaScript (Parte 2) - Curso JavaScript escreveu sobre ter que pegar o id da tag e não da div, porém na div da frase pegou direto