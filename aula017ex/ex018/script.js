let fnum = window.document.querySelector('input#txtnum')
let fsel = window.document.querySelector('select#sel')
let res = window.document.querySelector('section#res')
let lista = []

function adicionar() {
    let num = Number(fnum.value)
    if(lista.indexOf(num) !=  -1 || num < 1 || num > 100) {
        window.alert('Valor inválidor ou já encontrado na lista.')
    } else {
        lista.push(num)
        for(let c = 0; c < lista.length; c++) {
            let op = window.document.createElement('option')
            op.text = `Valor ${lista[c]} adicionado`
            fsel.appendChild(op)
        }
    }
}

function analisar() {
    res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados`
}