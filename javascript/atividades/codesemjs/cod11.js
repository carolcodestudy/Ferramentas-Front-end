//Vou fazer os exemplos baseados na aula 
/*var idade = 34
console.log(`Você tem ${idade} anos`)

if(idade == 16 && 17){
 console.log ('O seu voto ainda não é obrigatório')
} else if (idade >= 18 && idade <= 66 ){
 console.log ('O seu voto é obrigatório')
} else if (idade >= 67 ){
 console.log('O seu voto não é mais obrigatório')
}
 else {
    console.log('Você ainda não tem 16 anos e não pode votar')
}*/
/*if (idade < 18){
    console.log('Você não pode votar ainda')
} else {
    console.log('Você pode votar')
}*/

/*var agora = new Date() agora.getHours() agora.getMinutes()
var hora = 15 
var minutos = 59 

console.log(`São ${hora}:${minutos} horas`)
if (hora >=5 && hora <= 12 ){
 console.log('Bom dia professor!')
} else if (hora >=13 && hora <= 18 ){
 console.log('Boa tarde professor')
} else if (hora > 18 && hora <= 23){
  console.log('Boa noite professor')
} else {
    console.log ('É de madrugada? Vai dormir')
}*/

var hoje = new Date()
var data = hoje.getDate()
//var dia = hoje.getDay()
var mes = hoje.getMonth()
var ano = hoje.getFullYear()

console.log(`Hoje é ${data} de ${mes} do ano de ${ano}`)

//Entre parenteses pode escolher o caso
/*switch(5){
    case 0: 
     console.log('Domingo')
     break
     case 1:
     console.log('Segunda-feira')
     break
     case 2:
     console.log('Terça-feira')
     break
     case 3:
     console.log('Quarta-feira')
     break
     case 4:
     console.log('Quinta-feira')
     break
     case 5:
     console.log('Sexta-feira')
     break
     case 6:
     console.log('Sábado')
     break
     default: console.log('Só existe esses dias')
}*/
//Aqui eu consegui colocar para saber o dia de hoje direto colocando a variável no lugar da expressão
/*switch(dia){
    case 0: 
     console.log('Domingo')
     break
     case 1:
     console.log('Segunda-feira')
     break
     case 2:
     console.log('Terça-feira')
     break
     case 3:
     console.log('Quarta-feira')
     break
     case 4:
     console.log('Quinta-feira')
     break
     case 5:
     console.log('Sexta-feira')
     break
     case 6:
     console.log('Sábado')
     break
     default: console.log('Só existe esses dias')
}*/
