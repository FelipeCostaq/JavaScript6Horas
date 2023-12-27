const carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    ano: 2001,
}

let texto = JSON.stringify(carro)
let obj = JSON.parse(texto)
console.log(texto)