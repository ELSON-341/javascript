function contador() {
    let ini = window.document.getElementById('txt_ini')
    let fim = window.document.getElementById('txt_fim')
    let pas = window.document.getElementById('txt_pas')
    let res = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltan dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}