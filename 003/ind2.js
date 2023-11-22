function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar
}

var total = realParaDolar(7.89, 5.08)
console.log(`R$ ${total.toFixed(2)}`)