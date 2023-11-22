function paraCelsius(valorFahrenheit){
    return(5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(90)

console.log(`A temperatura é de ${x.toFixed(2)} graus celsius`)