function contador() {
    let ini = window.document.getElementById('txt_ini')
    let fim = window.document.getElementById('txt_fim')
    let pas = window.document.getElementById('txt_pas')
    let res = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contador!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}