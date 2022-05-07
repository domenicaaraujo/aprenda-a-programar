console.log("hello mundo!")

// let é usado para declarar variável , criar uma específica
let idade = 18 
//idade recebe (=) o valor 18

let nominho = "maria"
//variável de texto tem que ser entre aspas

//BOOLean recebe true ou false
let bool = true 

//lista (arrays): pode receber vários valores > entre colchetes > separados por vírgula
let Lista = [11, 25, 85, 15154]
let Lista1 = ["alfredo", 14, "ana", 52]
let Lista2 = ["a", 24 ["lista2", 02, ["lista3"], 'continuação lista 2']]

//mapa (uma caixinha bem organizada): é uma lista de nomes com valor para aquilo > usa chaves > virgula no final da linha
let mapa = {
    "pasta_arquivo": ["seção doc carro", "seção doc casa", 'seção doc faculdade'],
    'casamento': ['casa', 'certidão'],
    "anos de casado": 25
}

//mostrar no terminal o que está no console
console.log(idade)
console.log(nome)
console.log(bool)
console.log(Lista)
console.log(Lista1)
console.log(Lista2)
console.log(mapa)

//aparacer o terceiro item da lista > posição 2 > começa a contar a partir do 0
console.log(Lista[2])
console.log(Lista2[0])

//aparecer o mapa: usa o nome
console.log(mapa['casamento'])
console.log(mapa["anos de casado"])
console.log(mapa["pasta_arquivo"])

//tipagem estática: tipo de variável estou criando
//tipagem dinâmica: o pc percebe o tipo de variav usada > ele decide como "calcula"

let numero = 10
console.log(numero)
numero = "teste de texto"
console.log(numero)

//operações matemática

let a = 10
let b = 5
let c = 2
let nome = "maria"
let sobrenome = " alves"
let apelido = "zinha"

let soma = (a+b)
console.log(soma)

let d = b - c
console.log(d)
//concatenar
console.log(nome + sobrenome)
console.log(nome+apelido)

//condicional: comparações >> if
// == significa igual
if (numero == 1) { //se vdd
    console.log("é verdade")
} else { //se falso
    console.log("não é vdd")
}

/* > maior
< menor
!= diferente
*/