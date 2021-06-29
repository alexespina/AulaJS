const container = document.querySelector(".container");
const listaAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoCadastra = document.querySelector(".botao_adc");
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");

paleta1.addEventListener('click', ()=> definePaleta('seagreem'));
paleta2.addEventListener('mousemove', ()=> definePaleta('slateblue') );
paleta3.addEventListener('doubleclick',()=> definePaleta('tomato') );
botaoCadastra.addEventListener('click',()=> cadastraAtividade());// evento do botão +

function definePaleta(cor){
     container.style.background = cor;
     listaAtividades.style.background = cor;
}

function removeAtividade1(atividade){
    listaAtividades.removeChild(atividade);
}


function removeAtividade(){
    while(listaAtividades.firstElementChild){
        listaAtividades.removeChild(listaAtividades.firstElementChild);
    } 
}



function criaAtividade(){
   const atividade = document.createElement("div"); 
   atividade.classList.add("atividade"); 
   const nomeAtividade = document.createElement("p");
   atividade.textContent = input.value;
   const botaoLimpar = document.createElement("button");
   botaoLimpar.textContent = "Limpar";
   botaoLimpar.classList.add("botao_del");
   botaoLimpar.addEventListener('click',()=>removeAtividade1(atividade));
   // ADD ELEMENTOS da atividade a lista de atividades
   listaAtividades.appendChild(atividade);
   atividade.appendChild(nomeAtividade);
   atividade.appendChild(botaoLimpar);
   //--//
}  

function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none";
        criaAtividade();

    }else{
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput(){
    input.value = "";
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade();
    }
});


//Aula 09
//RemoveChild
/*
const paletas_div = document.querySelector(".paletas_div");
const paleta2 = document.querySelector("#paleta2");

paletas_div.removeChild(paleta2);
*/
/*
const paletas_div = document.querySelector(".paletas_div");
while(paletas_div.firstElementChild){
    paletas_div.removeChild(paletas_div.firstElementChild)
}
*/
