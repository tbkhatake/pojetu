const colocacao = function (pontos) {/*Estrutura switch case, não consegui resolver o problema com o math.floor ainda*/
    switch (Math.floor(pontos)) {
        case 70:
            console.log("É campeão!")
            break
        case 60:
            console.log("Está na libertadores!")
            break
        case 50:
            console.log("Sulamericana!")
            break
        case 40:
        case 30:
            console.log("Se manteve na série A")
            break
        case 20:
        case 10:
        case 0:
            console.log("REBAIXADO.")
            break
        default:
            console.log("Valor inválido!")
            break
    }

}

colocacao(60)

const a = Math.floor(23)


console.log(a)