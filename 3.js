function matrizRandom() {
    const n = 3;
    const matriz = [];
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            let numero = Math.floor(Math.random() * (100 - 1) + 1);
            matriz[i][j] = numero;
        }
    }
    return matriz;
}

function mostrarMatriz() {
    let resultado = matrizRandom();
    for (let i = 0; i < resultado.length; i++) {
        console.log(resultado[i].join("\t"));
    }
    return resultado;
}

console.log(mostrarMatriz());