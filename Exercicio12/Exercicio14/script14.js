function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        img.src = 'midia/manha.jpg'
        document.body.style.background = '#87ceeb'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'midia/tarde.jpg'
        document.body.style.background = '#4169e1'
    } else {
        //Boa noite
        img.src = 'midia/noite.jpg'
        document.body.style.background = '#00008b'
    }
}
