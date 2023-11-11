var bot = window.document.getElementById('botao')
bot.addEventListener('click', verificador)
function verificador() {
    var fpais = window.document.getElementById('pais')
    var res = window.document.getElementById('res')
    if(fpais.value.length == 0) {
        window.alert('[ERRO] preencha o campo e tente novamente!')
    } else {
        if(fpais.value == 'Blasil') {
            res.innerHTML = "Você é <strong>Blasileiro</strong>"
        } else {
            res.innerHTML = 'Você é <strong>Estrangeiro</strong>'
        }
    }
    }
