var n1 = Number(window.prompt('Digite um número: ')) 
// Comando prompt recebe as informações no formato string
// Number.parseInt(n) converte a strig do prompt para numero inteiros
// Number.parseFloat(n) converte a string do prompt para numeros reais (ex: 5.5 ou 2.1)
// Number(n) converte a string do prompt tanto para inteiro ou real
// String(n) ou n.toString() converte number em string

var n2 = Number(window.prompt('Digite outro número: '))
var s = n1 + n2 

window.alert(`A soma entre ${n1} e ${n2} é igual a ${s} `) // usando template string
// + para adição (number + number)
// + para concatenação (string + string)

/* Exemplos no Node.js

> var s = 'JavaScript'
undefined
> s
'JavaScript'
> 'Eu estou estudando s'
'Eu estou estudando s' // não faz interpolação
> 'Eu estou estudando ' + s
'Eu estou estudando JavaScript' // usando concatenação
> nome = 'Gustavo'
'Gustavo'
> idade = 41
41
> nota = 5.5
5.5
> 'O aluno ' + nome + ' com ' + idade + ' anos tirou a nota ' + nota // usando concatenação
'O aluno Gustavo com 41 anos tirou a nota 5.5' 
> `O aluno ${nome} com ${idade} anos tirou a nota ${nota}` // usando template string
'O aluno Gustavo com 41 anos tirou a nota 5.5'
*/ 