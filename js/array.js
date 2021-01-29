const time = ["Flamengo", "Palmeiras", "Corinthians", "Botafogo"]/*Aqui estão 4 valores dentro de um array*/

console.log(time[0], "5 x 1", time[1])/*Chamando os calores de dentro do array*/

time[4] = "Vasco"/*Adicionando um novo valor no array*/
console.log(time)
console.log(time.length)/*Imprimi a quantidade de itens no array*/
time.push("Fluminense", "Atlético-MG", "Internacional", "Grêmio")/*Adicionando vários valores de uma só vez*/
console.log(time)

time.pop()/*Retira o último valor do array*/
delete time[1]/*Retira o valor no índice destacado*/
console.log(time)