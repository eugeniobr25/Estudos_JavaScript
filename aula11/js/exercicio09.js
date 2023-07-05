function buscar() {
    var pais = window.document.getElementById('pais')
    var res = window.document.getElementById('res')
    var orig = Text

    res.innerHTML = `<p>Sejá Bem Vindo!</p>`
    if (orig !== 'Brasil') {
        res.innerHTML += `Seja bem vindo ao nosso pais, caro visitante!`
    } 
    else {
        res.innerHTML += "Seja bem vindo de volta a sua terra natal!"
    }
}

