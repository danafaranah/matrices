function crearMatriz(n) {
    const matriz = [];
    for (let i = 0; i < n; i++) {
        matriz[i] = [];
        for (let j = 0; j < n; j++) {
            matriz[i][j] = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]`));
        }
    }
    return matriz;
}

function suma(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
        let fila = [];
        for (let j = 0; j < matriz1[i].length; j++) {
            fila.push(matriz1[i][j] + matriz2[i][j]);
        }
        resultado.push(fila)
    }
    return resultado;
}

function mostrarMatriz() {
    let n = parseInt(prompt("Ingresa la longitud de la matriz: "))
    let matriz1 = crearMatriz(n)
    let matriz2 = crearMatriz(n)
    let sumas = suma(matriz1, matriz2);
    for (let i = 0; i < sumas.length; i++) {
        console.log(sumas[i].join("\t"));
    }
    return sumas;
}

let mostrar = mostrarMatriz()

console.log(mostrar);