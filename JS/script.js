//alert('Olá')

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}horas.`

    if (hora < 12) {
        img.src = '../Cronos400.jpg'
        document.body.style.background = 'antiquewhite'
    } else {
        if (hora >= 12 && hora < 18) {
            img.src = '../teste-background/mashroom-original.jpg'
            document.body.style.background = 'rgb(197, 127, 87)'
        } else {
            img.src = '../imagem-video.jpg'
            document.body.style.background = 'rgb(48, 46, 45)'
        }
    }
}
function calcular() {
    var tnsc = document.getElementById('tnsc')
    var nsc = Number(tnsc.value)
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('resultado')
    var idade = ano - nsc
    if (nsc == 0 || nsc > ano) {
        alert('[ERRO] Ano de nascimento inválido; verifique e tente novamente.')
    } else {
        res.innerHTML = `<strong>${idade} anos.</strong>`
    }
}

function verificar() {
    var fsex = document.getElementsByName('radsex')
    var sn = document.getElementById('sn')
    if (fsex[0].checked) {
        sn.innerHTML = 'Obrigado pelo informe. Volte sempre :D'
    } else {
        sn.innerHTML = 'Lamento pelo mau funcionamento. Tentar-ei melhorar :c'
    }
}

