var idade = 15

if (idade >= 18 && idade < 65) {
    console.log('Você é obrigado a votar, meu parceirinho.')
} else {
    if (idade >= 16 || idade >= 65) {
        console.log('Você tem a opção de votar, meu parceirinho.')
    } else {
        console.log('Você não pode votar, meu parceirinho.')
    }
}

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)
if (hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else {
    if (hora <= 6) {
        console.log('Boa madrugada!')
    } else {
        if (hora >= 12 && hora < 18) {
            console.log('Boa tarde!')
        } else {
            console.log('Boa noite!')
        }
    }
}
var dia = new Date()
var diaS = dia.getDay()
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
//console.log(diaS)
switch (diaS) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda')
        break
    case 2:
        console.log('Hoje é Terça')
        break
    case 3:
        console.log('Hoje é Quarta')
        break
    case 4:
        console.log('Hoje é Quinta')
        break
    case 5:
        console.log('Hoje é Sexta')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
}

