/*
Sistema de cadastro de clientes
*/

let nome = "Manuel";
let sobrenome = "Severino";
let idade = 23;
const numcliente = 0984;
let numAnos = 6;
//let juros = 
/*
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(numcliente);
*/
//console.log("Boa tarde Sr."+ nome+""+sobrenome+".Sua Idade é:"+idade);
//idade = 25;
//console.log(idade);


//let valorEmprestimo = 150000; // usado no estrutura do for
let valorEmprestimo = 1; // usado na estrutura do While
let taxaDeJuros = 0.10;
let ehBomPagador = "SIM";
ehBomPagador = false;
//Montante = valorEmprestimo + juros 
/*fórmula juros simples 
juros= valorEmprestimo* taxaDeJuros*numAnos */
let juros = valorEmprestimo * taxaDeJuros * numAnos; // formula de juros
let montante = valorEmprestimo + juros ; // calculando o montante

//console.log("Valor do Montante: "+montante);

/**
 * Montando estruturas condicionais
 * Usando if and  else
 * Bom Pagador sim ou não
 */

/*
if(ehBomPagador){
    console.log("O cliente "+nome +" é um bom pagador.");
}else{
    console.log("O cliente "+nome +" não é um bom pagador");
}
*/

// ELSE IF - Taxa de Juros por Idade
/* regras
18~25 anos ->9%
26~35 anos ->8%
36~50 anos ->7%
51 ou mais ->6%
*/

// trabalhando com condiçoes de idade

if (idade >=18 && idade <=25){
    taxaDeJuros = 0.09;
}else if (idade>=26 && idade<=35){
    taxaDeJuros = 0.08;
}else if (idade>=36 && idade<=50){
    taxaDeJuros= 0.07;
}else {
    taxaDeJuros = 0.06;
}

//console.log(taxaDeJuros);   
/**
 * Trabalhando com o For
 */
/*
for(let cont= 0; cont<3;cont++){
    valorEmprestimo = parseInt( prompt("Digite o valor do emprestimo")); // recebe o valor inserido pelo usuário //metodo parseInt converte para numero
    numAnos = parseInt(prompt("Digite o numero de anos"));
    let juros = valorEmprestimo * taxaDeJuros * numAnos; // formula de juros
    let montante = valorEmprestimo + juros ;
    console.log(montante);     
}
*/

/**
 * Trabalhando com o While
  quando informar 0 acaba
*/

//let valorEmprestimo = 1;
/*
while(valorEmprestimo!=0){
    valorEmprestimo = parseInt(prompt("Insira o valor do emprestimo"));
    numAnos = parseInt(prompt("Insira o numero de anos"));
    //juros = valorEmprestimo * taxaDeJuros * numAnos; // formula de juros
    montante = valorEmprestimo + juros ;
    console.log(montante);
}
*/
