//Desafio 2 =========================================
let numeroEscolhido = 100

let fibonacci = [0,1]
let numeroAtual = 0
let verificadorDeExistencia = false

while(numeroAtual < numeroEscolhido){

    let casaAtual = fibonacci.length
    fibonacci[casaAtual] = fibonacci[casaAtual - 1] + fibonacci[casaAtual - 2]

    numeroAtual = fibonacci[casaAtual]

    if(numeroAtual === numeroEscolhido) {
        verificadorDeExistencia = true
    }

}

console.log(fibonacci)

verificadorDeExistencia? console.log("O numero escolhido existe na sequência de Fibonacci") : console.log("O numero escolhido NÃO existe na sequência de Fibonacci")