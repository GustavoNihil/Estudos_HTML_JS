const objs = [
    {
    nome: "Gustavo",
        idade: "19",
        ornitorrinco: {
            idade: 42,
            glândulas_lactantes: null
        },
        profissão: ["físico", "programador"],
        hobbis: ["skt", "programar", "jooj"],
},
{
    nome: "Pedrinho",
    hoje_tem_oque: "campeonato",
},
]

console.log(objs)
console.log(typeof objs)

// converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)







