const carro = {
    marca:'ford',
    modelo:'ka',
    ano:2015,
    placa:'ABC-1234',
    cor:'branca',
    buzina: function(){console.log('Biiiiiiiiiii')},

    completo: function(){
        return `A marca é ${carro.marca} o modelo é ${carro.modelo} da cor ${carro.cor} com a placa ${carro.placa} do ano de ${carro.ano}`
    }
}

console.log(`${carro.completo()}`)