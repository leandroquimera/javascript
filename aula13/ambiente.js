/* console.log('Repedição de linha.')
console.log('Repedição de linha.')
console.log('Repedição de linha.')
console.log('Repedição de linha.')
console.log('Repedição de linha.')
console.log('Repedição de linha.')
console.log('Repedição de linha.') */

var contar = 1
while (contar < 1) {   // com teste no inicio, Se não satisfazer a condição não faz nada e sai fora
    console.log(`TESTA primeiro a condição, se SATISFAZ repete - ${contar}`)
    contar += 1
}

var contadepois = 1
do {
    console.log(`Escreve essa linha de qualquer jeito, depois TESTA se SATISFAZ voltar a repetir - ${contadepois}`)
    contadepois = contadepois + 1
} while (contadepois < 1);