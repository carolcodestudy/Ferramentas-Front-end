//Tentar fazer a tabuada de mais

var digito = document.getElementById("numero")
var bloco = document.querySelector("#tabuada")

function multiplicacao(){
    if(digito.value.length == 0){
    alert("Erro. Coloque um número")
    }
    else{
    var conversor = Number(digito.value)
    var contador = 0
    bloco.innerHTML = ""
    while (contador <= 10){
        let resultado = document.createElement('option')
        resultado.text = `${conversor} x ${contador} = ${conversor * contador}`
        resultado.value = `bloco${contador}`
        bloco.appendChild(resultado)
        //Nos parenteses do appendChild não coloca aspas
        contador ++
    }
    }
    
}