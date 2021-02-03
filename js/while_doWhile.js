function GetRamdomNumberBetween(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = 0

while (option != -1) {/*Estrutura WHile*/
    option = GetRamdomNumberBetween(-1, 10)
    console.log(`A opção escolhida foi ${option}.`)
}

/********************************************************************************/
/*Estrutura Do WHile, a diferença é que nessa estrutura é feito primeiro a execução do comando e depois é vericada a condição */
do {
    option = GetRamdomNumberBetween(-1, 10)
    console.log(`A opção escolhida foi ${option}.`)
} while (option != -1)