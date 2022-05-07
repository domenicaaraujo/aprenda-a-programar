//resolvendo problemas de condicional

let pessoa = {
    'nome': "mari alves",
    'idade': 30,
    'temIngresso': true
}
//mostrar todo o dado de pessoa no console
console.log(pessoa)
//mostrar somente o nome
console.log(pessoa.nome)
console.log(pessoa['nome'])

//     && = e      ||= ou
if (pessoa.idade >= 18 &&  pessoa.temIngresso == true) {
    console.log("Seja bem vinde")
} else {
    console.log("Infelizmente você não pode entrar")
}



//FUNÇÕES
//criando a fç, o bloco
function imprimirNome () {
    console.log("ana lia")
}

//chamar a fç > executar
imprimirNome ()

function imprimirNome (nome, idade) {
    console.log(nome)
    console.log(idade)
}

imprimirNome ("primeira chamada", "30 anos")
imprimirNome ("segunda chamada", "25 anos")

function retornarNome (nome) {
    return nome
}

let nomeRecebidoDaFuncao = retornarNome("retorno da funcao")
console.log(nomeRecebidoDaFuncao)


function tirarMedia (A, B) {
    let soma = A+B
    let media = soma/2
    console.log(media)
    return nome
}

let mediarecebidadafuncao = tirarMedia(100,50)
console.log(nomeRecebidoDaFuncao)

//ARROW FUNCTION
const tirarMedia_arrow = ( A, B) => {
    let soma = A+B
    let media = soma/2
    console.log(media)
    return nome   
}

console.log(tirarMedia_arrow)


let pessoaA = {"temIngresso": true,  'idade': 30, 'nome':"lui"};
let pessoaB = {"temIngresso": true,  'idade': 20, 'nome':"lia"};
let pessoaC = {"temIngresso": false, 'idade': 15, 'nome':"ana"};

function podeEntrar (idade, ingresso) {

if (idade >= 18 && ingresso == true){
    console.log("pode entrar")
} else {
    console.log("não pode entrar")
}
}

podeEntrar (pessoaA.idade, pessoaA.temIngresso)
podeEntrar (pessoaC.idade, pessoaC.temIngresso)
podeEntrar (pessoaB.idade, pessoaB.temIngresso)


//iterar = repetir code
/* FOR ( let CONTADOR = 0; CONTADOR < 10; CONTADOR ++)
        |       de       |      até     |  aumenta +1 na conta   */

        let alunos = [
            {'nome': 'Tiago', 'fezProva': true, 'media': 10},
            {'nome': 'Alvaro', 'fezProva': true, 'media': 9},
            {'nome': 'Tobias', 'fezProva': false, 'media': 8},
            {'nome': 'Regina', 'fezProva': true, 'media': 9},
            {'nome': 'Julia', 'fezProva': true, 'media': 5},
            {'nome': 'Joana', 'fezProva': false, 'media': 6},
            {'nome': 'Paulo', 'fezProva': false, 'media': 4},
            {'nome': 'Carla', 'fezProva': false, 'media': 2},
            {'nome': 'Luciana', 'fezProva': true, 'media': 1}
        ]

        //vamos entender o nosso dado 
console.log("O ", alunos[2].nome, " tirou média ", alunos[2].media)

//Exercício 1: passando pela lista imprima apenas os nomes de alunos que fizeram a prova.

//pra cada aluno dentro da lista aluno
for (let aluno of alunos) {
         //imprimir todos os nomes de alunos
        console.log(aluno.nome)
    }

    for (let aluno of alunos) {
        //imprimir todos os nomes de alunos que fizeram prova
        if (aluno.fezProva == true){
            console.log(aluno.nome)
   }
}


//Exercício 2: quantos alunos fizeram a prova?
let quantidadeDeAlunos = 0 // a contagem começa em 0
for (let aluno_b of alunos) {
    if (aluno_b.fezProva == true) {
        //quantidadeDeAlunos = quantidadeDeAlunos + 1 ou > soma a qtde+1
        //quantidadeDeAlunos ++ > sempre soma +1
        quantidadeDeAlunos += 1 //valor atual da variavel +1

    }
}
console.log("A quantidade de alunos que fizeram prova é: ", quantidadeDeAlunos)



//MÉTODOS (fçs prontas)> trabalhar com listas
//lista.metodoQueEuQueroUsar
/* fçs chamam outras fçs
o param do metodo (fç) forEach é chamar outra fç que será executada p/ cd item da lista
e esse seg fç dentro do forEach recebe um param que será a ref a cd item da lista

lista.forEach(itemDaLista)=>{
    console.log(itemDaLista)
}
*/
//Exercício
console.log("a chamada a seguir usa o método for each")
//roda para cada elemento da lista
alunos.forEach(
    (aluno) => {

        if (aluno.fezProva == true) {
            console.log(aluno.nome)
        }

    }
)