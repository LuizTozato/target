//DESAFIO 4 ========================================
const dados = [
    {estado: 'SP', faturamento: 67836.43},
    {estado: 'RJ', faturamento: 36678.66},
    {estado: 'MG', faturamento: 29229.88},
    {estado: 'RS', faturamento: 27165.48},
    {estado: 'OUTROS', faturamento: 19849.53}
]

const arrayNumerico = dados.map(obj => obj.faturamento)
const total = arrayNumerico.reduce( (anterior, posterior) => anterior + posterior, 0)
console.log(`Valor total da distribuidora R$${total}` )

dados.forEach(obj => obj.faturamento = (100*obj.faturamento/total).toFixed(2) + "%" )
console.log("\nRepresentação de cada estado:")
console.log(dados)