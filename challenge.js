

function pegarValores(array){
    let arrayDeSaida = []

    for(let i = 0; i < array.length; i++){
        if(!arrayDeSaida.includes(array[i])){
            arrayDeSaida.push(array[i])
        }
    }

    return arrayDeSaida
}

function vezesRepetem(n, array){
    let vezes = 0

    for(let i = 0; i < array.length; i++){
        if(array[i] === n){
            vezes += 1
        }
    }

    return {
        valor: n,
        repete: vezes
    }
}

function ordenarPorRepeticao(array){
    return array.sort((a, b) => b.repete - a.repete)
}


function armazenarRepeticoes(array){
    let semRepeticoes = pegarValores(array)
    let contadorDeRepeticoes = []

    for(let i = 0; i < semRepeticoes.length; i++){
        contadorDeRepeticoes.push(vezesRepetem(semRepeticoes[i], array))
    }
    

    return ordenarPorRepeticao(contadorDeRepeticoes)
}

function definirMenor(array){
    let ordenadoPorRepeticao = armazenarRepeticoes(array)

    if(ordenadoPorRepeticao[1] < ordenadoPorRepeticao[0]){
        return `Valor mais repetido: ${ordenadoPorRepeticao[1].valor}\nAparições: ${ordenadoPorRepeticao[1].repete}`
    } else {
        return `Valor mais repetido: ${ordenadoPorRepeticao[0].valor}\nAparições: ${ordenadoPorRepeticao[0].repete}`
    }
}

function main(array){
    console.log(definirMenor(array))
}

function pegarInteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function arrayAleatorio(){
    let array = []

    for(let i = 0; i <= 100; i++){
        array.push(pegarInteiroAleatorio(1, 5000))
    }

    return array
}


main([34, 31, 34, 77, 82])
main([22, 101, 102, 101, 102, 525, 88])
main(arrayAleatorio())





