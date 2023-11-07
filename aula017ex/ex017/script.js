/* validação da caixa*/
function adicionar() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')
    if(tnum.value.length == 0) {
        window.alert('Digite um número por favor!')
    } else {
        var num = Number(tnum.value)
        for(let c in num) {
            let vet = []
            vet.push(c)
            var op = window.document.createElement('option')
            op.text = `Valor ${c} adicionado`
            res.appendChild(op)
        }
    }
}