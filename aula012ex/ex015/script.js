const date = new Date()
const yaer = date.getFullYear()
const fYaer = document.getElementById('txtano')
const res = document.querySelector('div#res')
const redSex = window.document.getElementsByName('radsex')
function toCheck() {
    
    const age = yaer - Number.parseInt(fYaer.value)
    let gender = ''
    const img = window.document.createElement('img')
    img.setAttribute('id', 'photo')

    if (fYaer.value.length == 0 || fYaer.value > yaer) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
        return
    } 

    if (redSex[0].checked) {
        gender = 'homem'
        // baby
        if (age >= 0 && age < 10) {
            img.setAttribute('src', 'homem-bebe.png')
            // young
        } else if (age < 21) {
            img.setAttribute('src', 'homem-jovem.png')
            // adult
        } else if (age < 50) {
            img.setAttribute('src', 'homem-adulto.png')
            // old
        } else {
            img.setAttribute('src', 'homem-idoso.png')
        }
    } else {
        gender = 'mulher'
         // baby
        if (age >= 0 && age < 10) {
            img.setAttribute('src', 'mulher-bebe.png')
            // young
        } else if (age < 21) {
            img.setAttribute('src', 'mulher.png')
            // adult
        } else if (age < 50) {
            img.setAttribute('src', 'mulher-adulta.png')
            // old
        } else {
            img.setAttribute('src', 'mulher-idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gender} com ${age} anos.`
    res.appendChild(img)
}

fYaer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') toCheck()
})

redSex[0].addEventListener('click', toCheck)
redSex[1].addEventListener('click', toCheck)