let times = ['Flamengo', 'Fluminense', 'Vasco', 'Botafogo', 'Volta Redonda', 'Bangu']/*Estrutura for*/

console.log(`Os times cariocas são:`)
for (let i = 0; i < times.length; i++) {
    console.log(`${times[i]}`)
}
console.log('--------------------------------')


let Flamengo = {/*Estrutura for in*/
    Nome: 'Flamengo',
    Estado: 'Rio de Janeiro',
    Idolo: 'Zico',
    Mascote: 'Urubu'
}

console.log("Dados sobre o Flamengo")
for (let atributos in Flamengo) {
    console.log(`${atributos} = ${Flamengo[atributos]}`)
}