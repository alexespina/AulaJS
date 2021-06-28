function interrogatorio(){
   let numSim = 0;
   let pergunta1 = prompt("Telefonou para a vitima?");
   let pergunta2 = prompt("Esteve no Local do Crime?");
   let pergunta3 = prompt("Mora perto vitima?");
   let pergunta4 = prompt("Devia para a vitima?");
   let pergunta5 = prompt("Já trabalhou para a vitima?");

   if(pergunta1==="sim"){
      numSim +=1;
   }
   if(pergunta2==="sim"){
    numSim +=1;
   }
   if(pergunta3==="sim"){
    numSim +=1;
   }
   if(pergunta4==="sim"){
    numSim +=1;
   }
   if(pergunta5==="sim"){
    numSim +=1;
   }
   return(numSim);

}
function classifica(numSim){
    if(numSim===5){
        console.log("Assassino");
    }else if (numSim===3|| numSim===4){
        console.log("Cumplice");
    }else if (numSim===2){
        console.log("Suspeito");
    }else{
        console.log("Inocente");
    }

}
// a função interrogatorio irá passar o numero de SIM esta por sua vez irá fazer a analise
classifica(interrogatorio());
