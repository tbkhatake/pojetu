function imprimaSoma(a, b) {/*imprimasima é o nome da função / (a, b)são os parâmetros */
    console.log(a + b)/*console.log sendo usado para fazer a função de imprimir e somar ao ser chamada*/
}

imprimaSoma(3, 10)

function multiplique(a, b) {
    return a * b/*Aqui usamos o return para fazer a multiplicação*/
}

console.log(multiplique(2, 9))/*Como não usamos o console.log dentro da função, tivemos que usar ele para chamar a função*/

function subtraia(a, b = 10) {/*Aqui já definimos um valor para o b*/
    return b - a
}

console.log(subtraia(3))/*Então caso chame a função com apenas um valor, automaticamente b valerá 10*/

const divida = function (a, b) {/*Aqui estamos colocando uma função em uma variável*/
    return a / b
}

console.log(divida(10, 2))