// add metodos para trabalhar com clientes

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
           },
           adicionaAvalista: function(avalista){
              this.emprestimo.avalistas.push(avalista); // para acessar o array de avalista usa-se o "this" 
           },
           removeAvalista: function(){
             this.emprestimo.avalistas.pop() // remove o ultimo avalista da lista
           },
           editaAvalista: function(nomeAvalista,indice){
             this.emprestimo.avalistas[indice] = nomeAvalista;
           },
           ordenaAvalista: function(){
               this.emprestimo.avalistas.sort(); // metodo para ordenar o array usa-se o "sort"
           },
           exibeAvalistas: function(){
               this.emprestimo.avalistas.forEach((avalista,indice) =>{
                  console.log(`O ${indice+1}ºavalista é ${avalista}`);
               });
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
cliente1.adicionaAvalista("zé");
cliente1.adicionaAvalista("gino");
cliente1.removeAvalista(); // remove o ultimo da lista 
cliente1.editaAvalista("maria do amparo",0);
cliente1.exibeAvalistas();
console.log(cliente1.emprestimo.avalistas);

function adicionaInfLogin(cliente,email,senha){
   
    if (email.indexOf("@")!== -1 && senha.lenght > 5){
        cliente.login = {   
        email:email,
        senha:senha
     }
     return cliente;
   }else{
       return "Credenciais Invalidas";
   }

}

console.log(adicionaInfLogin(cliente1,"edvaldo@gmail.com","ed12345"));
console.log(adicionaInfLogin(cliente1,"edva.com","ed1234"));
console.log(adicionaInfLogin(cliente1,"edvaldo@gmail.com","ed1"));
    

