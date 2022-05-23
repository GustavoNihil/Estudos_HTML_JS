
function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
// let == var
let res = parimpar(7)
console.log(res)

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2,8))

function fatorial(f) {
    let fat = 1
    for(let c = f; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// Recursividade (uma função que chama ela mesma)
function fatorial2(f2) {
    if (f2 == 1) {
        return 1
    } else {
        return f2 * fatorial2(f2-1)
    }
}

console.log(fatorial2(5))
