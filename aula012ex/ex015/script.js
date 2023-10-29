function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'homem-bebe.png')
            } else if(idade < 21) {
                // jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if(idade < 50) {
                // adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'mulher-bebe.png')
            } else if(idade < 21) {
                // jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if(idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
            
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detequitamos um ${gênero} de ${idade} anos`
    res.appendChild(img)
}