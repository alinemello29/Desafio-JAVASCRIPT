// 01 - Condição composta para verificar se é dia ou noite
let dia = true; // Poderia ser uma variável que é alterada com base no horário real

if (dia) {
    console.log('Está claro');
} else {
    console.log('Está de noite');
}

// 02 - Loop for para exibir números pares até 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 03 - Função para exibir uma mensagem no console
function exibirMensagem() {
    console.log("Esta é uma mensagem");
}

exibirMensagem();

// 04 - Função para exibir um nome no console
function exibirNome(nome) {
    console.log(nome);
}

exibirNome("Fulano");

// 05 - Função para exibir nome, idade e estilo musical preferido no console
function exibirDetalhes(nome, idade, estilo) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Estilo Musical Preferido: ${estilo}`);
}

exibirDetalhes("Fulano", 30, "Rock");

// 06 - Função para exibir filme e música no console
function exibirFilmeEMusica(filme, musica) {
    console.log(`Filme: ${filme}, Música: ${musica}`);
}

exibirFilmeEMusica("Interstellar", "Bohemian Rhapsody");

// 07 - Função para retornar o triplo de um número
function triplo(numero) {
    return numero * 3;
}

console.log(triplo(5)); // Exemplo de uso

// 08 - Função para verificar se uma variável é true ou false
function verificarBooleano(valor) {
    return typeof valor === 'boolean';
}

console.log(verificarBooleano(true)); // Exemplo de uso

// 09 - Array com 5 itens exibido no console
let itens = ["item1", "item2", "item3", "item4", "item5"];
console.log(itens);

// 10 - Adicionar um nome no início do array
itens.unshift("NovoItem");
console.log(itens);

// 11 - Remover o último nome do array
itens.pop();
console.log(itens);

// 12 - Adicionar dois nomes no final do array
itens.push("ÚltimoItem1", "ÚltimoItem2");
console.log(itens);

// 13 - Remover o primeiro nome do array
itens.shift();
console.log(itens);

// 14 - Adicionar no meio do array
itens.splice(Math.floor(itens.length / 2), 0, "NovoItemNoMeio");
console.log(itens);

// 15 - Ordenar em ordem crescente
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers);