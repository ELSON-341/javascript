let fnum = window.document.querySelector('input#txtnum')
let fsel = window.document.querySelector('select#sel')
let res = window.document.querySelector('section#res')
let valores = []

function adicionar() {
    if(valores.indexOf(Number(fnum.value)) !=  -1 || fnum.value < 1 || fnum.value > 100) {
        window.alert('Valor inválidor ou já encontrado na lista.')
    } else {
        valores.push(Number(fnum.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${fnum.value} adicionado`
        fsel.appendChild(item)
        res.innerHTML = ''
    }
    fnum.value = ''
    fnum.focus()
}

function analisar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes di finalizar!')
    } else {
        let tot = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > max) {
                max = valores[pos]
            } 
            if(valores[pos] < min) {
                min = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, ${tot} números cadastrador.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${max}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${min}</p>`
        res.innerHTML += `<p>A soma de todos os valures é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}