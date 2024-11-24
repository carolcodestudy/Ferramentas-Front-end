// Exemplos baseado da auala

/*function parouimpar(numero){
    if (numero% 2 == 0){
        return 'Par'
    }
    else {
        return 'Ímpar'
    }
}
let resultado = parouimpar(9)
console.log(resultado)
// console.log(parouimpar(9))
// Vai imprimir o resultado

function somar(n1= 0, n2= 0){
    //deixar as variaveis recebendo zero no começo faz com que se tiver só um numero na chamada vai somar com 0
    return (n1 + n2)
}
console.log(somar(6))
//NaN é not a number

let calculo = function (x) {
return x * 2
}
console.log(calculo(2))

function fatorial(n){
    var fat = 1
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(3))*/

function calculo(fatora){
if (fatora == 1){
    return 1
}
else {
    return fatora * calculo(fatora-1)
    //Isso é recursividade
}
}
console.log(calculo(6))