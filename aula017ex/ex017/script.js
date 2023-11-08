/* validação da caixa*/
function adicionar() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')
    if(tnum.value.length == 0) {
        window.alert('Digite um número por favor!')
    } else {
        let num = Number(tnum.value)
        if(num < 1 || num > 100) {
            window.alert('Valor inválido ou já encontrado na lista.')
        } else {
            var vet = []
            vet.push(num)
            let c = 0
            while(c < vet.length) {
                let op = window.document.createElement('option')
                op.text += `Valor ${vet[c]} adicionado.`
                res.appendChild(op)
                c++
        }
        }
    }
}