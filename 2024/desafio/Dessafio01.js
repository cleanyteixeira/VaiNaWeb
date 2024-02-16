// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
const dia = "noite"

const mensagem = dia === "dia" ? "Claro" : "De noite";

console.log(mensagem);


// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 03 - crie uma função que exiba uma mensagem no console
function exibeMensagem(mensagem) {
    console.log(mensagem);
}
exibeMensagem("Chiefs campeão do SuperBowl LVIII");

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibeNome(nome) {
    console.log("Olá, " + nome);
}
exibeNome("Cleany");


// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function informacoes(nome, idade, estiloMusical) {
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Estilo musical preferido: " + estiloMusical);
} 
informacoes("Cleany", 30, "Pop");


// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function exibePreferencias(filme, musica) {
    console.log("Filme favorito: " + filme);
    console.log("Música favorita: " + musica);
}
 exibePreferencias("The Hunger Games", "Safe & Sound");


//  07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero) {
    return numero * 3;
}
const resultado = triplo(4);
console.log(resultado);


// 08 - crie uma função que  verifique se uma  variável é true ou false
function banana(fruta) {
    return fruta == true;
}
const fruta = "pera";
console.log(banana(fruta));


// 09 - Crie um array que receba 5 itens e exiba no console.
const lista = ["Casa", "Carro", "Moto", "Pedra", "Bola"];
console.log(lista);


// 10 - Utilize um método para adicionar um nome ao inicio do array.
lista.unshift("Tv");
console.log(lista);


// 11 - Utilize um método para remover o último nome do array.
lista.pop();
console.log(lista);

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
lista.splice(lista.length, 0, "Notebook", "Pera");
console.log(lista);

// 13 - Utilize um método para remover o primeiro nome do array.
lista.shift(lista);
console.log(lista);

// 14 - Utilize um método para adicionar no meio deste array.
let nomes = ["João", "Maria", "José", "Pedro"];
nomes.splice(2, 0, "Cleany");
console.log(nomes);

// 15 - Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort();
 console.log(numbers);