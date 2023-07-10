var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamete ${hora} horas.`)
if (hora >= 1 && hora <= 4) {
    console.log(`Boa Madrugada!`)
} else if (hora >= 5 && hora <= 12) {
    console.log('Boa Dia!')
} else if (hora >= 13 && hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}