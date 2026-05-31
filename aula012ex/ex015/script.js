function toCheck() {
    const date = new Date()
    const yaer = date.getFullYear()
    const fYaer = document.getElementById('txtano')
    const res = document.querySelector('div#res')


    if (fYaer.value.length == 0 || fYaer.value > yaer) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
        return
    } 

    const redSex = window.document.getElementsByName('radsex')
    const age = yaer - Number.parseInt(fYaer.value)
    let gender = ''
    
    if (redSex[0].checked) {
        gender = 'Homem'
    } else {
        gender = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Você é ${gender}`
}
