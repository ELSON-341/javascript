/* validação da caixa*/
function adicionar() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')
    if(tnum.value.length == 0) {
        window.alert('Digite um número por favor!')
    } else {
        var num = Number(tnum.value)
        var vet = []
        for(let c in vet) {
            vet.push(vet[c])
            let op = window.document.createElement('option')
            op.text += `Valor ${vet[c]}`
            res.appendChild(op)
        }
    }
}