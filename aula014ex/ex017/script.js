function tabuada() {
    let tnum = window.document.querySelector('input#txtnum')
    let res = window.document.querySelector('select#res')
    if(tnum.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let num = Number(tnum.value)
        let c = 1
        while(c <= 10) {
            let item = window.document.createElement('option')
            item.text = `${num} X ${c} = ${num * c}`
            res.value = `${c}`
            res.appendChild(item)
            c++
        }
        }
    }