let fnum = document.getElementById('num-txt')
const fsel = document.getElementById('sel')
const res = document.getElementById('res')

let values = []

function add() {
    if(values.indexOf(Number(fnum.value)) != -1 || fnum.value < 1 || fnum.value > 100) {
        window.alert('Valor invalido ou já encontrado na lista.')
    } else {
        values.push(Number(fnum.value))
        const item = document.createElement('option')
        item.text = `Valor ${fnum.value} adionado`
        item.value = `${fnum.value}`
        fsel.appendChild(item)
        res.innerHTML = ''
    }
    fnum.value = ''
    fnum.focus()
}

function toAnalyze() {
    if (values.length == 0) {
        alert('Adicione valorese antes de finalizar!')
        return
    }

    let max = values[0]
    let min = values[0]
    let sum = 0
    for (let pos in values) {
        sum += values[pos]
        if (values[pos] > max) {
            max = values[pos]
        
        }
        
        if (values[pos] < min) {
            min = values[pos]
        }
    }

    const total = values.length
    const mean = sum / total

    res.innerHTML += ''
    res.innerHTML +=  `<p>Ao todo, temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${max}</p>`
    res.innerHTML += `<p>O menor valor infomado foi ${min}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${sum}</p>`
    res.innerHTML += `<p>A média dos valores digitado é ${mean}</p>`
}