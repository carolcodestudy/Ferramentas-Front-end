//alert(`São ${horas}h e ${minutos}`) //Funcionou!
//hora.getHours()
//hora.getMinutes()

function hora(){
let hora = new Date()
let horas =   hora.getHours()
let minutos =  hora.getMinutes()

let frase = document.querySelector("p")
frase.innerHTML = `${horas} : ${minutos}`


if (horas <=9){
    let frase = document.querySelector("p")
    frase.innerHTML = `0${horas} : ${minutos}`
}

if (minutos <=9){
    let frase = document.querySelector("p")
    frase.innerHTML = `${horas} : 0${minutos}`
}

if(horas >=0 && horas <=4 ){

let mensagem = document.querySelector("h1")
mensagem.innerHTML = 'É madrugada vá dormir!'

let filmagem = document.getElementById("luar")
//Não pode usar aspas duplas quando coloca  a variável. O parentNode pegou o id do vídeo como o pai ... o removeChild removeu o vídeo
filmagem.parentNode.removeChild(filmagem)

var madrugada = document.createElement('video')
madrugada.id = 'luar'
madrugada.style.width = '100vw'
madrugada.style.height = '100vh'
madrugada.style.objectFit = 'cover'
madrugada.style.position = 'fixed'
madrugada.autoplay = true
//Alguém do site pt.stackoverflow falou sobre a propriedade muted, eu coloquei aqui e o vídeo rodou automaticamente. O vídeo do cisne está com áudio.
madrugada.muted = true
madrugada.loop = true

let noite = document.getElementById("fundo")
noite.appendChild(madrugada)

//Criar o source do vídeo
let caminho = document.createElement('source')

caminho.src = 'videos/madrugada.mp4'
caminho.type = 'video/mp4'

//Abri uma condicional caso o navegador não conseguir rodar o vídeo em mp4, rodar em webm ou então exibir uma imagem.
if(caminho.type != 'video/mp4'){
    
    caminho.src = 'videos/madrugada.webm'
    caminho.type = 'video/webm'
} 
else {

    let imagem = document.querySelector("#fundo")
    imagem.style.backgroundImage = "url ('printdalua.png')"
}

madrugada.appendChild(caminho)

}
else if (horas >= 5 && horas <=8){

    let mensagem = document.querySelector("h1")
    mensagem.innerHTML = 'Que Deus abençoe o seu dia'
    mensagem.style.color = 'rgb(202, 108, 108)'

    let filmagem = document.getElementById("luar")
    filmagem.parentNode.removeChild(filmagem)

    let sunrise = document.createElement('video')
    sunrise.id = 'cedo'
    sunrise.style.width = '100vw'
    sunrise.style.height = '100vh'
    sunrise.style.objectFit = 'cover'
    sunrise.style.position = 'fixed'
    sunrise.autoplay = true
    sunrise.muted = true
    sunrise.loop = true

    let solzinho = document.querySelector("#fundo")
    solzinho.appendChild(sunrise)

    let caminho = document.createElement('source')
    caminho.src = 'videos/montanha.mp4'
    caminho.type = 'video/mp4'

    if(caminho.type != 'video/mp4'){

        caminho.src = 'videos/montanha.webm'
        caminho.type = 'video/webm'
    }
    else{
        let imagem = document.getElementById("fundo")
        imagem.style.backgroundImage = "url('fotos/printmonhtanha.png')"
    }

    sunrise.appendChild(caminho)
}
else if(horas >=9 && horas <=11){

    let mensagem = document.querySelector('h1')
    mensagem.innerHTML = 'Que Deus abençoe o seu dia'

    let filmagem = document.getElementById("luar")
    filmagem.parentNode.removeChild(filmagem)

    let manhã = document.createElement('video')
    manhã.id = 'matutino'
    manhã.style.width = '100vw' 
    manhã.style.height = '100vh'
    manhã.style.objectFit = 'cover'
    manhã.style.position = 'center'
    manhã.muted = true
    manhã.autoplay = true
    manhã.loop = true

    let dia =  document.querySelector("#fundo")
    dia.appendChild(manhã)

    let caminho = document.createElement('source')
    caminho.src = 'videos/manha8.mp4'
    caminho.type = 'video/mp4'

    if(caminho.type != 'video/mp4'){
        caminho.src = 'videos/manha8.webm'
        caminho.type = 'video/webm'
    }
    else{
        let imagem = document.getElementById("fundo")
        imagem.style.backgroundImage = "url('fotos/printmanha8.png')"
    }

    manhã.appendChild(caminho)
}
else if(horas >= 12 && horas <=14){

    let mensagem = document.querySelector('h1')
    mensagem.innerHTML = 'Tenha uma boa tarde'

    let filmagem = document.getElementById("luar")
    filmagem.parentNode.removeChild(filmagem)

    let meiodia = document.createElement('video')
    meiodia.id = 'tarde'
    meiodia.style.width = '100vw' 
    meiodia.style.height = '100vh'
    meiodia.style.objectFit = 'cover'
    meiodia.style.position = 'center'
    meiodia.muted = true
    meiodia.autoplay = true
    meiodia.loop = true

    let descanso = document.querySelector("#fundo")
    descanso.appendChild(meiodia)

    let caminho = document.createElement('source')
    caminho.src = 'videos/arvore.mp4'
    caminho.type = 'video/mp4'

    if(caminho.type != 'video/mp4'){
        caminho.src = 'videos/arvore.webm'
        caminho.type = 'video/webm'
    }
    else{
         let imagem = document.getElementById("fundo")
         imagem.style.backgroundImage = "url('fotos/printarvore.png')"
    }

    meiodia.appendChild(caminho)
}
else if(horas >=15 && horas <= 16){

    let mensagem = document.querySelector('h1')
    mensagem.innerHTML = 'Tenha uma boa tarde'

    let filmagem = document.getElementById("luar")
    filmagem.parentNode.removeChild(filmagem)

    let tarde = document.createElement('video')
    tarde.id = 'vespertino'
    tarde.style.width = '100vw' 
    tarde.style.height = '100vh'
    tarde.style.objectFit = 'cover'
    tarde.style.position = 'center'
    tarde.muted = true
    tarde.autoplay = true
    tarde.loop = true

    let lazer = document.querySelector("#fundo")
    lazer.appendChild(tarde)

    let caminho = document.createElement('source')
    caminho.src = 'videos/tarde.mp4'
    caminho.type = 'video/mp4'

    if(caminho.type != 'video/mp4'){
        caminho.src = 'videos/tarde.webm'
        caminho.type = 'video/webm'
    }
    else{
         let imagem = document.getElementById("fundo")
         imagem.style.backgroundImage = "url('fotos/printtarde.png')"
    }

    tarde.appendChild(caminho)
}
else if (horas >= 17 && horas <= 18){

    let mensagem = document.querySelector('h1')
    mensagem.innerHTML = 'O dia já está acabando'

    let filmagem = document.getElementById("luar")
    filmagem.parentNode.removeChild(filmagem)

    let fimdatarde = document.createElement('video')
    fimdatarde.id = 'sol'
    fimdatarde.style.width = '100vw' 
    fimdatarde.style.height = '100vh'
    fimdatarde.style.objectFit = 'cover'
    fimdatarde.style.position = 'center'
    fimdatarde.muted = true
    fimdatarde.autoplay = true
    fimdatarde.loop = true

    let pordosol = document.querySelector("#fundo")
    pordosol.appendChild(fimdatarde)

    let caminho = document.createElement('source')
    caminho.src = 'videos/pordosol.mp4'
    caminho.type = 'video/mp4'

    if(caminho.type != 'video/mp4'){
        caminho.src = 'videos/pordosol.webm'
        caminho.type = 'video/webm'
    }
    else{
         let imagem = document.getElementById("fundo")
         imagem.style.backgroundImage = "url('fotos/printpordosol.png')"
    }

    fimdatarde.appendChild(caminho)
}
else if (horas >=19 && horas <=23){
    let mensagem = document.querySelector('h1')
    mensagem.innerHTML = 'Que Deus abençoe a sua noite'

    let filmagem = document.getElementById("luar")
    filmagem.parentNode.removeChild(filmagem)

    let noite = document.createElement('video')
    noite.id = 'sonho'
    noite.style.width = '100vw'
    noite.style.height = '100vh'
    noite.style.objectFit = 'cover'
    noite.style.position = 'center'
    noite.muted = true
    noite.autoplay = true
    noite.loop = true
    let dormir = document.querySelector("#fundo")
    dormir.appendChild(noite)

    let caminho = document.createElement('source')
    caminho.src = 'videos/noite.mp4'
    caminho.type = 'video/mp4'
    noite.appendChild(caminho)
   
}
}
//Atualizou a hora
setInterval(hora,1000) 