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

    const total = document.createElement('p')
    total.innerHTML = `Ao todo, tem ${values.length} números cadastrados.`

    const max = document.createElement('p')
    max.innerHTML = `O maior valor informado foi ${Math.max(...values)}`
    
    const min = document.createElement('p')
    min.innerHTML = `O menor valor informado foi ${Math.min(...values)}`

    let sum = 0
    for (let pos in values) {
        sum += values[pos]
    }

    const rSum = document.createElement('p')
    rSum.innerHTML = `A somsndo todos os vares, temos ${sum}`
    
    let mean = sum / values.length
    const rMean = document.createElement('p')
    rMean.innerHTML = `A média dos vores digitados é ${mean}`

    res.appendChild(total)
    res.appendChild(max)
    res.appendChild(min)
    res.appendChild(rSum)
    res.appendChild(rMean)
}