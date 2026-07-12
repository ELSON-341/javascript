let fnum = document.getElementById('num-txt')
const fsel = document.getElementById('sel')
const res = document.getElementById('res')

let values = []

function add() {
    if(values.indexOf(Number(fnum.value)) != -1 || fnum.value < 1 || fnum.value > 100) {
        window.alert('Valor invalido ou já encontrado na lista.')
    } else {
        values.push(fnum.value)
        const item = document.createElement('option')
        item.text = `Valor ${fnum.value} adionado`
        item.value = `${fnum.value}`
        fsel.appendChild(item)
        res.innerHTML = ''
    }
    fnum.value = ''
    fnum.focus()
    
}
