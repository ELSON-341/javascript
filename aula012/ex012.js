const naw = new Date()
const time = naw.getHours()
console.log(`Agora são exatamente ${time} horas.`)
if (time < 6) {
    console.log('Boa madrogada!')
} else if (time < 12) {
    console.log('bom dia!');   
} else if (time < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}