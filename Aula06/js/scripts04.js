var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br/>`)
document.write(`Seu nome maiusculo é ${nome.toUpperCase()}`)
document.write(`Seu nome minusculo é ${nome.toLowerCase()}`)

/* 
> var n1 = 1560.2
undefined
> n1
1560.2
> n1.toFixed(2)
'1560.20'
> n1.toFixed(2).replace('.',',')
'1560,20'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
'R$ 1.560,20'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
'US$ 1.560,20'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
'€ 1.560,20'
*/ 