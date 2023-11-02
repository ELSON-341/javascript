/* [X] validação da caixa vazia 
   [X] validação do passo 0*/
var bot = window.document.getElementById('botao')
bot.addEventListener('click', contagem)
function contagem() {
    var tinicio = window.document.getElementById('txt_inicio')
    var tfim = window.document.getElementById('txt_fim')
    var res = window.document.querySelector('div#res')
    var tpasso = window.document.querySelector('input#txt_passo')
    if(tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        res.innerHTML = 'Inpossível contar!'
    } else if(Number(tpasso.value) == 0) {
        tpasso = 1
        window.alert('Passo inválido! Considerando PASSO 1.')
    } else {
        res.innerHTML = 'Contando:<br>'
        for(var p = tinicio.value; p.value <= tfim.value; p.value += tpasso.value ) {
            res.innerHTML = p.value
        }
    }   
}