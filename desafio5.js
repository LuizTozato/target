let palavra = 'PALINDROMO'

function inverterPalavra(palavra){

    const tamanho = palavra.length - 1

    let palavraInvertida = ''

    for(let i = tamanho; i >= 0; i--){
        
        palavraInvertida += palavra.charAt(i)
    }

    return palavraInvertida

}

console.log(inverterPalavra(palavra))
//OMORDNILAP