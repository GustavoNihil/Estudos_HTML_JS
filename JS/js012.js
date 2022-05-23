var num = [5, 7, 2, 83]
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Em ordem crescente ${num.sort()}`)

for (var c = 0; c <= num.length-1; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
