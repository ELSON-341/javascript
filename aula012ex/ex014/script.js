function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var ima = window.document.getElementsByTagName('img')[0]
    var data = new Date()
    var hora = data.getHours()
    var hora = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 11) {
        // BOM DIA!
        ima.src = 'foto-manha.png'
        window.document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18) { 
        // BOA TARDE!
        ima.src = 'foto-tarde.png'
        window.document.body.style.background = '#68a5f3'
    }
    else {
        // BOA NOITE!
        ima.src = 'foto-noite.png'
    }
}