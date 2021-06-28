//SEÇÃO 8 - OBJETOS -SISTEMA DE CADASTRO DE CLIENTES
function cadastra_cliente(nomeCliente,sobrenomeCliente,idadeCliente,
    valorEmprestimoCliente, numAnosCliente = 2 ,
    ehBomPagadorCliente=false, avalistaCliente){
        cliente={
            nome: nomeCliente,
            sobrenome: sobrenomeCliente,
            idade: idadeCliente,
            emprestimo:{
               valorEmprestimo: valorEmprestimoCliente,
               numAnos: numAnosCliente,
               ehBomPagador: ehBomPagadorCliente,
               taxaDeJuros: defineTaxa(idadeCliente),
               avalistas: avalistaCliente
           }   
        }
    return cliente;
        
}

function defineTaxa(idadeCliente){
    if (idadeCliente >=18 && idadeCliente <=25){
        return  0.09;
    }else if (idadeCliente>=26 && idadeCliente<=35){
        return  0.08;
    }else if (idadeCliente>=36 && idadeCliente<=50){
        return  0.07;
    }else {
        return  0.06;
    }
}

const cliente1= cadastra_cliente("Antonio", "Jurassic", 90, 20000,9,true,["MANU","RAFA","JUJU"]);
console.log(cliente1);