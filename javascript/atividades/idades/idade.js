function idade (){
    var atual = new Date()
    var ano = atual.getFullYear()
    var nasceu = document.getElementById("ano") 
    var resultado =  document.getElementById("mostrar")

    if (nasceu.value.length == 0 || Number(nasceu.value) > ano){
       alert("Erro. Tente novamente")
    }
    else {
        var escolha = document.getElementsByName("sexo")
        var calculo = ano - Number(nasceu.value)
        //Fez o calculo da idade
        var genero = ""
        var fotos = document.createElement('img')
        fotos.setAttribute('id' , 'imagens')
        if(escolha[0].checked){
          //alert("Tu é macho")
          genero = 'Homem'
          if(calculo <= 10){
             fotos.setAttribute('src' , 'foto/kid-AlisaDyson-pixabay.jpg')
             //vou por como menino usando a variavel genero
             if(genero == 'Homem'){
                resultado.innerHTML = `Você tem ${calculo} e você é um menino`
             }
          }
          else if(calculo > 10 && calculo <= 18){
            fotos.setAttribute('src' , 'foto/pexels-julia-m-cameron.jpg')
            
            if(genero == 'Homem'){
               resultado.innerHTML = `Você tem ${calculo} e você é um menino`
            }
         }
          else if (calculo >18 && calculo <= 39){
              fotos.setAttribute('src' , 'foto/pexels-stefan-stefancik.jpg')
              resultado.innerHTML = `Você tem ${calculo} e você é ${genero}`
          }
          else if (calculo >39 && calculo <= 59){
            fotos.setAttribute('src' , 'foto/pexels-nathan-cowley.jpg')
            resultado.innerHTML = `Você tem ${calculo} e você é ${genero}`
        }
          else if (calculo >59){
            fotos.setAttribute('src' , 'foto/pexels-yakup-polat.jpg')
            resultado.innerHTML = `Você tem ${calculo} e você é ${genero}`
          }
        }
        else if (escolha [1].checked){
          //alert("Você é femea")
          genero = 'Mulher'
          if(calculo <= 10){
            fotos.setAttribute('src' , 'foto/child-LorriLang-pixabay.jpg')
            //vou por como menino usando a variavel genero
            if(genero == 'Mulher'){
               resultado.innerHTML = `Você tem ${calculo} e você é uma menina`
            }
         }
         else if (calculo >11 && calculo <=18){
            fotos.setAttribute('src' , 'foto/pexels-trinity-kubassek.jpg')
            if(genero == 'Mulher'){
                resultado.innerHTML = `Você tem ${calculo} e você é uma menina`
         }
        }
         else if (calculo >18 && calculo <= 39){
             fotos.setAttribute('src' ,'foto/young-woman-pexels-pixabay.jpg')
             resultado.innerHTML = `Você tem ${calculo} e você é ${genero}`
         }
         else if (calculo >39 && calculo <= 58){
            fotos.setAttribute('src' ,'foto/pexels-matheus-guimarães.jpg')
            resultado.innerHTML = `Você tem ${calculo} e você é ${genero}`
        }
         else if (calculo >59){
           fotos.setAttribute('src' , 'foto/pexels-mikhail-nilov-8317651.jpg')
           resultado.innerHTML = `Você tem ${calculo} e você é ${genero}`
         }
        }
        //resultado.innerHTML = `Você tem ${calculo} e você é ${genero}`
        //resultado.style.textAlign = 'center' Serve para centralizar um texto com o js
        resultado.appendChild(fotos)
        
        
    }
}


    /*if (anos <=12){

    }
    else if (anos > 12){

    }
    else if (anos >= 60){

    }
    Condicional para por a foto especifica*/

    /*if (anos <= 12){
        if(sexo[0].checked){
         img.src = 'foto/kid-AlisaDyson-pixabay.jpg'
        }
        else if (sexo[1].checked){
            img.src = 'foto/child-LorriLang-pixabay.jpg'
        }
     
    }
    else if (anos > 12){
        if(sexo[0] = Masculino){
            img.src = 'foto/pexels-stefan-stefancik.jpg'
           }
           else if (sexo[1] = Feminino){
               img.src = 'foto/young-woman-pexels-pixabay.jpg'
           }
    }
    else if (anos >59){
        if(sexo[0].checked){
            img.src = 'foto/pexels-mikhail-nilov-8317651.jpg'
           }
           else if (sexo[1].checked){
               img.src = 'foto/pexels-yakup-polat.jpg'
           }  

    }*/
