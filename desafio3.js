//Desafio 3 =========================================
const json = require('./dados.json')

const arrayNumericoDeFaturamentoPositivo = json.filter((obj) => obj.valor !== 0)
                                               .map(val => val.valor)

const numeroDeDiasComFaturamentoPositivo = arrayNumericoDeFaturamentoPositivo.length

//CÁLCULO DO MENOR
const menorValor = Math.min(...arrayNumericoDeFaturamentoPositivo)
console.log("Menor Valor: R$ " + menorValor.toFixed(2))

//CÁLCULO DO MAIOR
const maiorValor = Math.max(...arrayNumericoDeFaturamentoPositivo)
console.log("Maior Valor: R$ " + maiorValor.toFixed(2))

//CÁLCULO DO SOMATÓRIO E DA MÉDIA
const somaDoFaturamento = arrayNumericoDeFaturamentoPositivo.reduce( (anterior, atual) => anterior + atual, 0)
const media = somaDoFaturamento / numeroDeDiasComFaturamentoPositivo
console.log(`Média de Faturamento: R$${media.toFixed(2)} para ${numeroDeDiasComFaturamentoPositivo} dias com faturamento positivo.`)

//CONTAGEM DOS DIAS COM FATURAMENTO ACIMA DA MÉDIA
let contador = 0
arrayNumericoDeFaturamentoPositivo.forEach(valor => 
    {
        if(valor > media){
            contador++
        }
    }
)

console.log(`Foram registrados ${contador} dias com faturamento acima da média.`)