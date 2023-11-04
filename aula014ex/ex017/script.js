function tabuada() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.getElementById('res')
    if(tnum.value.length == 0) {
        window.alert('Por favor digite um número!')
    }
    else {
        res.innerHTML = ''
        let num = Number(tnum.value)
        for(let c = 1; c <= 10; c++) {
            let item = window.document.createElement('option')
            item.value = `res${c}`
            item.text = `${num} X ${c} = ${num * c}`
            res.appendChild(item)
        }
    }
}