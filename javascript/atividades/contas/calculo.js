function contar() {
    let primeiro = document.querySelector("#primeiro")
    let ultimo = document.getElementById("ultimo")
    let salto = document.getElementById("salto")
    let resultado = document.querySelector("#emissor")

    if (primeiro.value.length == 0 || ultimo.value.length == 0 || salto.value.length == 0){
       //alert("Não está indo bem")
       resultado.innerHTML = "Não deu pra contar"
       alert("Por favor preencha o que falta")
    } else{
        // alert("Apararentemente bem")
        // Um pequeno teste que o prof ensiou a fazer
        // NÃO DEU CERTO! NÃO TINHA LIGADO A FUNÇÃO LÁ NO HTML
       // Funcionou a função!
       resultado.innerHTML = 'Contando: '
       var p = Number(primeiro.value)
       var u = Number(ultimo.value)
       var s = Number(salto.value)

//ERRO AQUI . Funcionou kkkk tava colocando como o p igualando a zero e o certo seria o s
    if (s <= 0){
        s = 1
    }   

    if (p < u){
       for(var contador = p ; contador <= u ; contador += s){
        resultado.innerHTML += `${contador} \u{1F449}` //emoji da maozinha
       }
       resultado.innerHTML += `\u{1F3C1}` //emoji da bandeira
       // Os emojis em js só funcion dentro das aspas
} else {
       for (contador = p; contador >= u ; contador -= s){
        resultado.innerHTML += `${contador} \u{1F449}`
       }
       resultado.innerHTML += `\u{1F3C1}`
}
    }
}