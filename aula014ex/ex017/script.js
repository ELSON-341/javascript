
function generateTable() {
    const num = window.document.querySelector('#txtnum')
    const tab = window.document.querySelector('#seltab')

    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')
        return
    }

    const n = Number(num.value)

    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        const item = window.document.createElement('option')
        item.text = `${c} X ${n} = ${c*n}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
    
}