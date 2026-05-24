const p = document.getElementsByTagName('p')[0]
const img = document.getElementById('photo')

// const now = new Date()
// const hour = now.getHours()

const hour = 17
p.innerText = `Agora são ${hour} horas`


if (hour < 12) {
    // MORNING
    img.src = 'foto-manha.png'
    document.body.style.background = '#f5d08c'
} else if (hour < 18) {
    // AFTERNOON
    img.src = 'foto-tarde.png'
    document.body.style.background = '#68a5f3'
} else {
    // NIGHT
    img.src = 'foto-noite.png'
    document.body.style.background = '#707099'
}
