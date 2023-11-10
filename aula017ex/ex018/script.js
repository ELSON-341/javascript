let fnum = window.document.querySelector('input#txtnum')
let fsel = window.document.querySelector('select#sel')
let res = window.document.querySelector('section#res')
let dados = []
let lista = []
let max = 0
let min = 0

function adicionar() {
    let num = Number(fnum.value)
    if(lista.indexOf(num) !=  -1 || num < 1 || num > 100) {
        window.alert('Valor inválidor ou já encontrado na lista.')
    } else {
        lista.push(num)
        for(let c = 0; c < lista.length; c++) {
            let op = window.document.createElement('option')
            op.text = `Valor ${lista[c]} adicionado`
            dados.push(lista)
            lista.pop()
            fsel.appendChild(op)
        }
    }
}

function analisar() {
    for(let l in dados) {
        if(l == 0) {
            max[l] = l
            min[l] = l
        } else if(l > max) {
            max[l] = l
        } else if(l < min) {
            min[l] = l
        }
    }
    res.innerHTML = `O maior valor informado foi ${max}`
    
}