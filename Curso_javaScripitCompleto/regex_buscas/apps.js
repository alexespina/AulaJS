let produtos = "3210000232-B\n3232023314-C\985-D\n987999932154-E\nssssSSSS4545454-F";
console.log(produtos);
//const regex = /[0-9]+[-][A-Z]/g; // Se caso querer apenas os produtos da C retira-se [A-Z] e coloca [C]
const regex = /[0-9]+[-][A-Z]/g;
//const resultado = produtos.match(regex);
const resultado = regex.exec(produtos);
console.log(resultado);
