var p1 = window.document.getElementsByTagName('p')[1]
var corpo = window.document.body
// var d = window.document.getElementById('msg')
// var d = window.document.getElementsByName('msg')[0]
// Quando quero selecionar um id usar <#> quando for class usar <.>
var d = window.document.querySelector('div#msg')


// window.document.write('Esta escrito assim: ' + p1.innerText)

/*
p1.style.color = 'blue'
corpo.style.background = 'black'
*/

/* 
Não tras a palavra DOM em negrito, traz apenas o texto
document.write(p1.innerText)
*/

/*
Tras a plavra DOM em negrito
document.write(p1.innerHTML)
*/

/*
Usando alert trazendo a tag strong
window.alert(p1.innerHTML)
*/

/*
Usando alert trazendo somente o texto
window.alert(p1.innerText)
*/

/*
Estilizando pela id da tag div
d.style.background = 'green'
*/

/*
Mundando o conteudo usanod id
d.innerText = 'Estou aguardando'
*/

/*
Mundando o conteudo usando class
d.innerText = 'Ola!'
*/

// Mundando o conteudo usando seletor do CSS
d.style.color = 'blue'
d.style.background = 'yellow'