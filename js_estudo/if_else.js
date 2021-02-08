const campeao = function (pontos) {/*Estrutura simples de if/else*/
    if (pontos >= 70) {
        console.log("É campeão!!!")
    }
    else {
        console.log("Não foi dessa vez!")
    }
}

campeao(32)

const colocacao = function (ponto) {/*If/else com multiplos if*/
    if (ponto >= 70) {
        console.log("É campeão!!!")
    }
    else if (ponto >= 50 && ponto < 70) {
        console.log("Está na zona de classificação para libertadores!")
    }
    else if (ponto >= 30 && ponto < 50) {
        console.log("Se manterá na primeira divisão.")
    }
    else if (ponto >= 0 && ponto < 30) {
        console.log("Você foi rebaixado =(")
    }
    else {
        console.log("Valor inválido!")
    }
}
colocacao(29)