function Exibir() {
    let day = document.querySelector("#dia");
    let month = document.querySelector("#mês");
    let year = document.querySelector("#ano");
    let actual = new Date();
    let dayactual = actual.getDate();
    let monthactual = actual.toLocaleString("Default", { month: "2-digit" });
    let yearactual = actual.getFullYear();
  
    //TESTES DAS CONDICIONAIS
    //Usou o operador lógico or
    if (
      day.value.length == 0 ||
      month.value.length == 0 ||
      year.value.length == 0 ||
      year.value > yearactual
    ) {
      alert("Preencha os campos por favor!");
    } else {
      //Fazer os calculos
      var calcday = Number(dayactual - day.value);
      var calcmonth = Number(monthactual - month.value);
      var calcyear = Number(yearactual - year.value);
  
      //Fazer a verificação do sexo se é feminino e a idade
  
      var genero = document.getElementsByName("sexo");
      if (genero[0].checked) {
        //Bebe com um mes
        if (
          dayactual == day.value &&
          calcmonth == 1 &&
          yearactual == year.value
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcmonth} mês. Você é uma bebê!`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (
          dayactual > day.value &&
          (calcmonth == 1) & (yearactual == year.value)
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcmonth} mês. Você é uma bebê!`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (
          dayactual < day.value &&
          calcmonth == 1 &&
          yearactual == year.value
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `Você é uma bebê de dias!`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
  
        //Bebe com meses
        else if (calcyear == 0) {
          if (dayactual == day.value && monthactual > month.value) {
            //alert(calcmonth + " meses ")
            frase = document.querySelector(
              "h2"
            ).innerHTML = `Você tem ${calcmonth} meses.`;
            let ajuste = document.querySelector("h2");
            ajuste.className = "texto";
  
            let foto = document.createElement("img");
            foto.className = "feminino";
            foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          } else if (dayactual < day.value && monthactual > month.value) {
            //alert(calcmonth)
            frase = document.querySelector(
              "h2"
            ).innerHTML = `Você tem ${calcmonth} meses.`;
            let ajuste = document.querySelector("h2");
            ajuste.className = "texto";
  
            let foto = document.createElement("img");
            foto.className = "feminino";
            foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          } else if (dayactual > day.value && monthactual > month.value) {
            //alert(calcmonth)
            frase = document.querySelector(
              "h2"
            ).innerHTML = `Você tem ${calcmonth} meses.`;
            let ajuste = document.querySelector("h2");
            ajuste.className = "texto";
  
            let foto = document.createElement("img");
            foto.className = "feminino";
            foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
          //Não nasceu ainda
          else if (
            dayactual > day.value ||
            (calcday == 0 && monthactual < month.value)
          ) {
            alert("Erro. Você não nasceu ainda");
          } else if (dayactual < day.value && monthactual < month.value) {
            alert("Erro. Você não nasceu ainda");
          }
        }
        //MESES que nasceram no ano anterior porém não fez 1 ano
        else if (dayactual == day.value && calcmonth == -1 && calcyear == 1) {
          let positivo = Number(calcmonth * -1);
          let calculo = Number(monthactual) + positivo;
          frase = document.querySelector("h2").innerHTML = `Você tem ${
            Number(calculo) + calcyear
          } meses.`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (dayactual > day.value && calcmonth == -1 && calcyear == 1) {
          let positivo = Number(calcmonth * -1);
          let calculo = Number(monthactual) + positivo;
          frase = document.querySelector("h2").innerHTML = `Você tem ${
            Number(calculo) + calcyear
          } meses.`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (dayactual < day.value && calcmonth == -1 && calcyear == 1) {
          let positivo = Number(calcmonth * -1);
          let calculo = Number(monthactual) + positivo;
          frase = document.querySelector("h2").innerHTML = `Você tem ${
            Number(calculo) + calcyear - 1
          } meses.`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
  
        //Nasceu ano passado porém nao completou 1 ano ainda, o mes é maior(número) do que o mes atual
        //MESES COM O ANO DE 2023
        else if (dayactual > day.value && calcmonth == -2 && calcyear == 1) {
          //alert(positivo + Number(monthactual -1) + " meses ")
  
          let positivo = Number(calcmonth * -1);
          frase = document.querySelector("h2").innerHTML = `Você tem ${
            positivo + Number(monthactual - 1)
          } meses.`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (dayactual > day.value && calcmonth == -3 && calcyear == 1) {
          //alert(positivo + Number(monthactual -1) + " meses ")
  
          let positivo = Number(calcmonth * -1);
          frase = document.querySelector("h2").innerHTML = `Você tem ${
            positivo + Number(monthactual - 3)
          } meses.`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (dayactual < day.value && calcmonth == -2 && calcyear == 1) {
          //alert(positivo + Number(monthactual -1) + " meses ")
  
          let positivo = Number(calcmonth * -1);
          frase = document.querySelector("h2").innerHTML = `Você tem ${
            positivo + Number(monthactual - 2)
          } meses.`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (dayactual < day.value && calcmonth == -3 && calcyear == 1) {
          //alert(positivo + Number(monthactual -1) + " meses ")
  
          let positivo = Number(calcmonth * -1);
          frase = document.querySelector("h2").innerHTML = `Você tem ${
            positivo + Number(monthactual - 4)
          } meses.`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
  
        //O bebe está perto de completar um ano
        else if (
          dayactual < day.value &&
          monthactual == month.value &&
          calcyear === 1
        ) {
          frase = document.querySelector("h2").innerHTML =
            "11 meses e alguns dias.";
  
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
  
        //Bebe com um ano Só funcionou com o operador or || e coloquei o comparador restrito
        else if (
          dayactual == day.value &&
          monthactual == month.value &&
          calcyear === 1
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `Agora você tem ${calcyear} aninho`;
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
  
        //O bebe já completou um ano
        else if (
          dayactual > day.value &&
          monthactual == month.value &&
          calcyear === 1
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcyear} ano. Você é uma bebê!`;
  
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (
          dayactual == day.value &&
          monthactual > month.value &&
          calcyear === 1
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcyear} ano. Você é uma bebê!`;
  
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (
          dayactual < day.value &&
          monthactual > month.value &&
          calcyear === 1
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcyear} ano. Você é uma bebê!`;
  
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        } else if (
          dayactual > day.value &&
          monthactual > month.value &&
          calcyear === 1
        ) {
          frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcyear} ano. Você é uma bebê!`;
  
          let ajuste = document.querySelector("h2");
          ajuste.className = "texto";
  
          let foto = document.createElement("img");
          foto.className = "feminino";
          foto.src = "imagens/meninas/infant-1426651_1280.jpg";
  
          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
  
        //Completou mais aniversario no ano de 2 á 3 aninhos
        else if (calcyear > 1 && calcyear <= 3) {
          if (dayactual == day.value && monthactual == month.value) {
            frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
            ${calcyear} aninhos`;
  
            let ajuste = document.querySelector("h2");
            ajuste.className = "texto";
  
            let foto = document.createElement("img");
            foto.className = "feminino";
            foto.src = "imagens/meninas/baby-3092097_1280.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
           else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
            frase = document.querySelector("h2").innerHTML = `${calcyear} aninhos. Você é uma princesinha`;
  
            let ajuste = document.querySelector("h2");
            ajuste.className = "texto";
  
            let foto = document.createElement("img");
            foto.className = "feminino";
            foto.src = "imagens/meninas/baby-3092097_1280.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
  
          //Vai completar o aniversario ainda no ano
          else if (
            (dayactual < day.value && monthactual == month.value) ||
            monthactual < month.value
          ) {
            frase = document.querySelector("h2").innerHTML = `${calcyear - 1} aninhos. Você é uma princesinha`;
  
            let ajuste = document.querySelector("h2");
            ajuste.className = "texto";
  
            let foto = document.createElement("img");
            foto.className = "feminino";
            foto.src = "imagens/meninas/baby-3092097_1280.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          } 
          else if (dayactual > day.value && monthactual < month.value) {
            frase = document.querySelector("h2").innerHTML = `${calcyear - 1} aninhos. Você é uma princesinha`;
  
            let ajuste = document.querySelector("h2");
            ajuste.className = "texto";
  
            let foto = document.createElement("img");
            foto.className = "feminino";
            foto.src = "imagens/meninas/baby-3092097_1280.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
        }
        //4 á 6 anos
        else if(calcyear >=4 && calcyear <=6){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} aninhos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-andrea-piacquadio-3755494.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} aninhos. Você é uma princesinha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-andrea-piacquadio-3755494.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} aninhos. Você é uma princesinha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/baby-3092097_1280.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} aninhos. Você é uma princesinha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/baby-3092097_1280.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //7 e 8 anos
        else if(calcyear == 7 || calcyear ==8){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-cottonbro-studio-3992388.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma princesa`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-cottonbro-studio-3992388.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma princesa`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-cottonbro-studio-3992388.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma princesa`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-cottonbro-studio-3992388.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        // 9 e 10 anos
        else if(calcyear ==9 || calcyear == 10){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/child-LorriLang-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma princesa`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/child-LorriLang-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma princesa`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/child-LorriLang-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma princesa`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/child-LorriLang-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        // 11 e 12 anos
        else if(calcyear == 11 || calcyear == 12){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-julia-m-cameron-4143799.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você está crescendo!`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-julia-m-cameron-4143799.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você está crescendo!`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-julia-m-cameron-4143799.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você está crescendo! `;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-julia-m-cameron-4143799.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //13 á 15 anos
        else if(calcyear >= 12 && calcyear <=15){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-min-an-713312.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você já é uma moça`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-min-an-713312.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você já é uma moça!`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-min-an-713312.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você já é uma moça! `;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-min-an-713312.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
        }
  
        // 16 á 18 anos
        else if(calcyear >= 16 && calcyear <=18){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-trinity-kubassek.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você está mudando`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-trinity-kubassek.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você está mudando`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-trinity-kubassek.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você está mudando`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-trinity-kubassek.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //19 á 21 anos
        else if(calcyear >=19 && calcyear <=21){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-andrea-piacquadio-920378.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-andrea-piacquadio-920378.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-andrea-piacquadio-920378.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-andrea-piacquadio-920378.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //22 á 30 anos
        else if(calcyear >=22 && calcyear <=30){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/young-woman-pexels-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/young-woman-pexels-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/young-woman-pexels-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/young-woman-pexels-pixabay.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //31 á 39 anos
        else if(calcyear >=31 && calcyear <=39){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-murat-işik-18115126.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-murat-işik-18115126.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-murat-işik-18115126.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma mulher`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-murat-işik-18115126.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //40 á 57 anos
        else if (calcyear >=40 && calcyear <=57){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-matheus-guimarães.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-matheus-guimarães.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-matheus-guimarães.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-matheus-guimarães.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //58 á 68 anos
        else if(calcyear >=58 && calcyear <= 68){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-mikhail-nilov-8317651.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-mikhail-nilov-8317651.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-mikhail-nilov-8317651.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-mikhail-nilov-8317651.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
        //68 para cima
        else if(calcyear >= 68){
          if (dayactual == day.value && monthactual == month.value) {
              frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
              ${calcyear} anos`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-black-light-media-8911111.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
             else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-black-light-media-8911111.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
    
            //Vai completar o aniversario ainda no ano
            else if (
              (dayactual < day.value && monthactual == month.value) ||
              monthactual < month.value
            ) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-black-light-media-8911111.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            } 
            else if (dayactual > day.value && monthactual < month.value) {
              frase = document.querySelector("h2").innerHTML = `${calcyear - 1} anos. Você é uma rainha`;
    
              let ajuste = document.querySelector("h2");
              ajuste.className = "texto";
    
              let foto = document.createElement("img");
              foto.className = "feminino";
              foto.src = "imagens/meninas/pexels-black-light-media-8911111.jpg";
    
              let age = document.getElementById("foto");
              age.appendChild(foto);
            }
        }
  
      } // CHECK DO SEXO FEMININO


                            // MASCULINO HOMEM E MENINO

      else{ // alert("macho!")

        //Bebe com um mes
        if (
            dayactual == day.value &&
            calcmonth == 1 &&
            yearactual == year.value
          ) {
            frase = document.querySelector(
              "h2"
            ).innerHTML = `${calcmonth} mês. Você é um bebê!`;
            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";

            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
           else if (
            dayactual > day.value &&
            (calcmonth == 1) & (yearactual == year.value)
          ) {
            frase = document.querySelector(
              "h2"
            ).innerHTML = `${calcmonth} mês. Você é um bebê!`;
            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";
    
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
           else if (
            dayactual < day.value &&
            calcmonth == 1 &&
            yearactual == year.value
          ) {
            frase = document.querySelector(
              "h2"
            ).innerHTML = `Você é um bebê de dias!`;
            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";
    
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
          
         //Bebe com meses
      else if (calcyear == 0) {
        if (dayactual == day.value && monthactual > month.value) {
          //alert(calcmonth + " meses ")
          frase = document.querySelector(
            "h2"
          ).innerHTML = `Você tem ${calcmonth} meses.`;
          let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
         else if (dayactual < day.value && monthactual > month.value) {
          //alert(calcmonth)
          frase = document.querySelector(
            "h2"
          ).innerHTML = `Você tem ${calcmonth} meses.`;
          let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
         else if (dayactual > day.value && monthactual > month.value) {
          //alert(calcmonth)
          frase = document.querySelector(
            "h2"
          ).innerHTML = `Você tem ${calcmonth} meses.`;
          let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
        //Não nasceu ainda
        else if (
          dayactual > day.value ||
          (calcday == 0 && monthactual < month.value)
        ) {
          alert("Erro. Você não nasceu ainda");
        } else if (dayactual < day.value && monthactual < month.value) {
          alert("Erro. Você não nasceu ainda");
        }
      } 

      //MESES que nasceram no ano anterior porém não fez 1 ano
      else if (dayactual == day.value && calcmonth == -1 && calcyear == 1) {
        let positivo = Number(calcmonth * -1);
        let calculo = Number(monthactual) + positivo;
        frase = document.querySelector("h2").innerHTML = `Você tem ${
          Number(calculo) + calcyear
        } meses.`;
        let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }
       else if (dayactual > day.value && calcmonth == -1 && calcyear == 1) {
        let positivo = Number(calcmonth * -1);
        let calculo = Number(monthactual) + positivo;
        frase = document.querySelector("h2").innerHTML = `Você tem ${
          Number(calculo) + calcyear
        } meses.`;
        let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }
       else if (dayactual < day.value && calcmonth == -1 && calcyear == 1) {
        let positivo = Number(calcmonth * -1);
        let calculo = Number(monthactual) + positivo;
        frase = document.querySelector("h2").innerHTML = `Você tem ${
          Number(calculo) + calcyear - 1
        } meses.`;
        let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }

      //MESES RESTANTES DE 2023
      else if (dayactual > day.value && calcmonth == -2 && calcyear == 1) {

        let positivo = Number(calcmonth * -1);
        frase = document.querySelector("h2").innerHTML = `Você tem ${
          positivo + Number(monthactual - 1)
        } meses.`;
        let ajuste = document.querySelector("h2");
        ajuste.className = "faixa";
          let foto = document.createElement("img");
          foto.className = "masculino";
          foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }
       else if (dayactual > day.value && calcmonth == -3 && calcyear == 1) {

        let positivo = Number(calcmonth * -1);
        frase = document.querySelector("h2").innerHTML = `Você tem ${
          positivo + Number(monthactual - 3)
        } meses.`;
        let ajuste = document.querySelector("h2");
        ajuste.className = "faixa";
          let foto = document.createElement("img");
          foto.className = "masculino";
          foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }
       else if (dayactual < day.value && calcmonth == -2 && calcyear == 1) {

        let positivo = Number(calcmonth * -1);
        frase = document.querySelector("h2").innerHTML = `Você tem ${
          positivo + Number(monthactual - 2)
        } meses.`;
        let ajuste = document.querySelector("h2");
        ajuste.className = "faixa";
          let foto = document.createElement("img");
          foto.className = "masculino";
          foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }
       else if (dayactual < day.value && calcmonth == -3 && calcyear == 1) {

        let positivo = Number(calcmonth * -1);
        frase = document.querySelector("h2").innerHTML = `Você tem ${
          positivo + Number(monthactual - 4)
        } meses.`;
        let ajuste = document.querySelector("h2");
          ajuste.className = "faixa";
          let foto = document.createElement("img");
          foto.className = "masculino";
          foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }

        //O bebe está perto de completar um ano
        else if (
            dayactual < day.value &&
            monthactual == month.value &&
            calcyear === 1
          ) {
            frase = document.querySelector("h2").innerHTML =
              "11 meses e alguns dias.";
    
            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";
    
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }

    //Bebe com um ano 
      else if (
        dayactual == day.value &&
        monthactual == month.value &&
        calcyear === 1
      ) {
        frase = document.querySelector(
          "h2"
        ).innerHTML = `Agora você tem ${calcyear} aninho`;
        let ajuste = document.querySelector("h2");
        ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }

       //O bebe já completou um ano
       else if (
        dayactual > day.value &&
        monthactual == month.value &&
        calcyear === 1
      ) {
        frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcyear} ano. Você é um bebê!`;
  
          let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }
       else if (
        dayactual == day.value &&
        monthactual > month.value &&
        calcyear === 1
      ) {
        frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcyear} ano. Você é um bebê!`;
  
          let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }
       else if (
        dayactual < day.value &&
        monthactual > month.value &&
        calcyear === 1
      ) {
        frase = document.querySelector(
            "h2"
          ).innerHTML = `${calcyear} ano. Você é um bebê!`;
  
          let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      } else if (
        dayactual > day.value &&
        monthactual > month.value &&
        calcyear === 1
      ) {
        frase = document.querySelector(
          "h2"
        ).innerHTML = `${calcyear} ano. Você é um bebê!`;

        let ajuste = document.querySelector("h2");
          ajuste.className = "faixa";
          let foto = document.createElement("img");
          foto.className = "masculino";
          foto.src = "imagens/meninos/baby-1249613_1280.jpg";

        let age = document.getElementById("foto");
        age.appendChild(foto);
      }

      //Completou mais aniversario no ano de 2 á 3 aninhos
      else if (calcyear > 1 && calcyear <= 3) {
        if (dayactual == day.value && monthactual == month.value) {
          frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
          ${calcyear} aninhos`;

          let ajuste = document.querySelector("h2");
          ajuste.className = "faixa";
          let foto = document.createElement("img");
          foto.className = "masculino";
          foto.src = "imagens/meninos/happy-7223110_1280.jpg";

          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
         else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
          frase = document.querySelector("h2").innerHTML = `${calcyear} aninhos. Você é um princípe`;

          let ajuste = document.querySelector("h2");
          ajuste.className = "faixa";
          let foto = document.createElement("img");
          foto.className = "masculino";
          foto.src = "imagens/meninos/happy-7223110_1280.jpg";

          let age = document.getElementById("foto");
          age.appendChild(foto);
        }

        //Vai completar o aniversario ainda no ano
        else if (
          (dayactual < day.value && monthactual == month.value) ||
          monthactual < month.value
        ) {
            frase = document.querySelector("h2").innerHTML = `${calcyear} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/happy-7223110_1280.jpg";

          let age = document.getElementById("foto");
          age.appendChild(foto);
        } 
        else if (dayactual > day.value && monthactual < month.value) {
            frase = document.querySelector("h2").innerHTML = `${calcyear} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/happy-7223110_1280.jpg";

          let age = document.getElementById("foto");
          age.appendChild(foto);
        }
      }

      //4 á 6 anos
      else if(calcyear >=4 && calcyear <=6){
        if (dayactual == day.value && monthactual == month.value) {
            frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
            ${calcyear} aninhos`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-jonas-mohamadi-1427288.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
           else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
            frase = document.querySelector("h2").innerHTML = `${calcyear} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-jonas-mohamadi-1427288.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }

          //Vai completar o aniversario ainda no ano
          else if (
            (dayactual < day.value && monthactual == month.value) ||
            monthactual < month.value
          ) {
            frase = document.querySelector("h2").innerHTML = `${calcyear -1} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-jonas-mohamadi-1427288.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          } 
          else if (dayactual > day.value && monthactual < month.value) {
            frase = document.querySelector("h2").innerHTML = `${ccalcyear -1} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-jonas-mohamadi-1427288.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }    
      }

        //7 e 8 anos
       else if(calcyear == 7 || calcyear == 8){
        if (dayactual == day.value && monthactual == month.value) {
            frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
            ${calcyear} aninhos`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-anna-shvets-3771646.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
           else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
            frase = document.querySelector("h2").innerHTML = `${calcyear} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-anna-shvets-3771646.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }

          //Vai completar o aniversario ainda no ano
          else if (
            (dayactual < day.value && monthactual == month.value) ||
            monthactual < month.value
          ) {
            frase = document.querySelector("h2").innerHTML = `${calcyear -1} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-anna-shvets-3771646.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          } 
          else if (dayactual > day.value && monthactual < month.value) {
            frase = document.querySelector("h2").innerHTML = `${calcyear -1} aninhos. Você é um princípe`;

            let ajuste = document.querySelector("h2");
            ajuste.className = "faixa";
            let foto = document.createElement("img");
            foto.className = "masculino";
            foto.src = "imagens/meninos/pexels-anna-shvets-3771646.jpg";
  
            let age = document.getElementById("foto");
            age.appendChild(foto);
          }
       }

        //9 á 11 anos
        else if(calcyear >= 9 && calcyear <= 11){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/kid-AlisaDyson-pixabay.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é um princípe`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/kid-AlisaDyson-pixabay.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um princípe`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/kid-AlisaDyson-pixabay.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um princípe`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/kid-AlisaDyson-pixabay.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }

        // 12 e 13 anos
        else if (calcyear ==12 || calcyear == 13){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-ty-rodriguez-18139514.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você está crescendo!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-ty-rodriguez-18139514.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você está crescendo!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-ty-rodriguez-18139514.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você está crescendo!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-ty-rodriguez-18139514.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }

        //13 á 15 anos
        else if(calcyear >=13 && calcyear <=15){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-julia-m-cameron.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você já é adolescente!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-julia-m-cameron.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você já é adolescente!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-julia-m-cameron.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você já é adolescente!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-julia-m-cameron.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }

        //16 á 20 anos
        else if(calcyear >=16 && calcyear <=20){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-min-an-1157461.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você está mudando`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-min-an-1157461.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você está mudando`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-min-an-1157461.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você está mudando`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-min-an-1157461.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }

        //21 á 30
        else if(calcyear >=21 && calcyear <=30){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-stefan-stefancik.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é um homem`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-stefan-stefancik.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um homem`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-stefan-stefancik.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um homem`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-stefan-stefancik.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }

        // 31 á 41
        else if(calcyear >=31 && calcyear <=41){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-thiago-miranda-1268798.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é um homem`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-thiago-miranda-1268798.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um homem`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-thiago-miranda-1268798.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um homem`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-thiago-miranda-1268798.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }

        //42 á 56
        else if(calcyear >=42 && calcyear <=56){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-nathan-cowley.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-nathan-cowley.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-nathan-cowley.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-nathan-cowley.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }
        //57 á 65 anos
        else if(calcyear >=57 && calcyear <=65){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-yakup-polat.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-yakup-polat.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-yakup-polat.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/pexels-yakup-polat.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }
        // Acima de 65 anos
        else if(calcyear > 65){
            if (dayactual == day.value && monthactual == month.value) {
                frase = document.querySelector("h2").innerHTML = `Parabéns! Você está completando 
                ${calcyear} anos`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/car-8181329_1280.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
               else if (dayactual > day.value && monthactual == month.value || monthactual > month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/car-8181329_1280.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
    
              //Vai completar o aniversario ainda no ano
              else if (
                (dayactual < day.value && monthactual == month.value) ||
                monthactual < month.value
              ) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/car-8181329_1280.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              } 
              else if (dayactual > day.value && monthactual < month.value) {
                frase = document.querySelector("h2").innerHTML = `${calcyear -1} anos. Você é um rei!`;
    
                let ajuste = document.querySelector("h2");
                ajuste.className = "faixa";
                let foto = document.createElement("img");
                foto.className = "masculino";
                foto.src = "imagens/meninos/car-8181329_1280.jpg";
      
                let age = document.getElementById("foto");
                age.appendChild(foto);
              }
        }

      } // CHECK DO SEXO MASCULINO
    
    //Esconder os componentes
  
    let label_day = document.querySelectorAll("label")[0];
    label_day.style.display = "none";

    let label_month = document.querySelectorAll("label")[1];
    label_month.style.display = "none";

    let label_year = document.querySelectorAll("label")[2];
    label_year.style.display = "none";
  
  
    day.parentNode.removeChild(day);
    month.parentNode.removeChild(month);
    year.parentNode.removeChild(year);

    let checados = document.getElementById("sexo");
    checados.style.display = 'none'

    //Esconder o botão "Ver"
    let hide_button = document.querySelectorAll("button")[0];
    hide_button.style.display = "none";

    let show_button = document.querySelectorAll("button")[1];
    show_button.style.display = 'block'
    show_button.id = 'reinicio'
    show_button.style.width = '20%'
    show_button.style.position = 'relative'
    show_button.style.top = '140pt'
    show_button.style.backgroundColor = 'rgba(68, 57, 57, 0.944)';
    show_button.style.border = 'none'
    
    } // ELSE
  } // FUNÇÃO EXIBIR