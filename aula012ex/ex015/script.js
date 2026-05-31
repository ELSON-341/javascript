function toCheck() {
    const date = new Date()
    const yaer = date.getFullYear()
    const fYaer = document.getElementById('txtano')
    const res = document.querySelector('div#res')

    if (fYaer.value.length == 0 || fYaer.value > yaer) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        window.alert('Tudo ok')
    }

    
}