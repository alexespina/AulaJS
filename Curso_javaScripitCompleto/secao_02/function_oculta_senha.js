// Função Ocultar Senha

function ocultaSenha(senha){
    let senhaAux = "";
    for (let i =0; i < senha.length; i++){
        senhaAux += "*";
    }
    return senhaAux;
}

const usuario = {
    nome: "zé",
    email: "ze@gmail.com",
    senha: "123456"
} 

usuario.senha = ocultaSenha(usuario.senha);
console.log(usuario);
