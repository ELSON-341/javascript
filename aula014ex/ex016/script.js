const counter = () => {
    const ini = window.document.getElementById('txt-ini')
    const fim = window.document.getElementById('txt-fim')
    const pas = window.document.getElementById('txt-pas')
    const res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Impossível contador!')
        return
    }

    res.innerHTML = 'Contando: <br>'
    const i = Number(ini.value)
    const f = Number(fim.value)
    let p = Number(pas.value)

    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1.')
        p = 1
    }
    
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += '\u{1F3C1}'
}
