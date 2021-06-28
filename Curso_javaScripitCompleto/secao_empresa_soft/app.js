/**
 * empresa de desenvolvimento de software
 */
/** Cargos e salários
 * Programador Junior -> 4mil
 * Programador Pleno -> 5mil
 * Programador Senior -> 6mil
 * Testador -> 5mil
 * Arquiteto -> 8mil
 * Analista -> 7mil
 * Gerente -> 10mil 
 */

let cargo = "Programador Junior";

switch(cargo){
    case "Programador Junior":
       console.log("O Programador Junior recebe 4000.");
       break;
    case "Programdor Pleno":
       console.log("O Programador Pleno recebe 5000.");
       break;
    case "Programador Senior":
       console.log("O Programador Senior recebe 6000.");
       break; 
    case "Testador":
       console.log("O Testador recebe 5000.");
       break;
    case "Arquiteto":
       console.log("O Arquiteto recebe 8000.");
       break;
    case "Analista":
       console.log("O Arquiteto recebe 7000.");
       break;            
    case "Gerente":
       console.log("O Gerente recebe 10000.");   
       break;
    default:
        console.log("Cargo nao cadastrado");  
        //break; 
}
