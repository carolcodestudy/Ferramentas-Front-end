//ESSE FOI O ÚLTIMO VÍDEO DO CURSO

/*var objeto = {nome: 'Zuan' , idade: 13, altura: 1.52}
console.log(objeto)

Printou no Terminal:
Info: Start process (09:21:36)
{ nome: 'zuan', idade: 13, altura: 1.52 }
Info: End process (09:21:36)*/

let usuario = {nome: 'Zuan', idade: 29, altura: 1.66, amadurece(age = 0){
console.log("Idade da mulher:")
this.idade -= age
//Para a variável poder somar com o parametro da função tem que referenciar antes com this.nome da variavel fazer os sinais de operação e o parametro. Em baixo fora do objeto tem que chamar a função. Coloca a variável,ponto e a função e entre parenteses coloca o que quer fazer, nesse exemplo coloquei -1 que foi para diminuir a idade, mas pode colocar o sinal de menos lá na linha do this também.
}
}
usuario.amadurece(3)
//console.log(usuario)
console.log(`Tirar a função do print: Nome -> ${usuario.nome} Idade-> ${usuario.idade} Altura -> ${usuario.altura}`)
//Tem que colocar o nome da variável do objeto e variável que está dentro das chaves para poder referenciar essas variáveis e mostrar no terminal.