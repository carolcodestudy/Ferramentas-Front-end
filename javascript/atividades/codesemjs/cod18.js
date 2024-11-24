//Fazer um loop no vetor
//console.log(valores) no node apareceu: [ 8, 1, 7, 9, 2 ]

let valores = [8,1,7,9,2]
/*for (let posicao = 0; posicao < valores.length;posicao++){
    console.log(`Posição ${posicao} do numero ${valores[posicao]}`)
}*/

/*for(let posicao in valores){
    console.log(`Posição ${posicao} do numero ${valores[posicao]}`)
}*/
//Fez a mesma coisa do último trecho docódigo em comentário

//console.log(`posição de 2 é`,posicao)
//Não encontrou o elemento 0 e deu -1
let posicao = valores.indexOf(2)
 if(posicao == -1){
console.log("Elemento não encontrado")
 }
 else{
    console.log("Elemento 2 está no ídice" , posicao)
 }
//Funcionou a funcional!