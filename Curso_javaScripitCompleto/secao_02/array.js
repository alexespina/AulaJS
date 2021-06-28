let nome  ;
let sobrenome ;
let idade ;
let valorEmprestimo;
let taxaDeJuros;
let numAnos;
let ehBomPagador;
const avalistas=[];// array
avalistas[0] = "CHICO";
avalistas[1] = "OTAVIO";

function cadastra_cliente(nomeCliente, sobrenomeCliente, idadeCliente,
    valorEmprestimoCliente,
    taxaDeJurosCliente, numAnosCliente=2,
    ehBomPagadorCliente=true, avalistasCliente){
        nome = nomeCliente;
        sobrenome = sobrenomeCliente;
        idade = idadeCliente;
        valorEmprestimo = valorEmprestimoCliente;
        //taxaDeJuros = taxaDeJurosCliente;
        //-----------------------------------------
         taxaDeJuros = defineTaxa(idadeCliente);
        //-----------------------------------------        
        numAnos = numAnosCliente;
        ehBomPagador = ehBomPagadorCliente;
        avalistas = avalistasCliente;
        
}

function defineTaxa(idadeCliente){
    if (idade >=18 && idade <=25){
        return  0.09;
    }else if (idade>=26 && idade<=35){
        return  0.08;
    }else if (idade>=36 && idade<=50){
        return  0.07;
    }else {
        return  0.06;
    }
}

cadastra_cliente("Antonio", "Jurassic", 90, 20000,2,true,[0]);
console.log(nome);
//console.log(avalistas);
console.log(avalistas[0]);
//console.log(avalistas[1]);
//console.log(avalistas[2]);
/*
cadastra_cliente("Edvaldo","Silva",35,6000,3,false);
console.log(nome);
console.log(sobrenome);
console.log(taxaDeJuros);
*/
