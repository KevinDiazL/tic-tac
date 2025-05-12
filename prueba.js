let a = [[1, 2, 3], [2, 2, 2], [1, 4, 2]];
let Prueba = [];
let dato = true;
console.log(a)
for (let i = 0; i < 4; i++) {
    Prueba[i] = parseInt(prompt("Dame el numero " + i))
}
console.log(Prueba)
console.log(checkWinner(Prueba))
function checkWinner(arr) {
    // Aplanamos y convertimos a Set para eliminar duplicados
    const arrSet = new Set(arr);

    // Comprobamos si alguna combinación ganadora está contenida en arrSet
    return a.some(combination =>
        combination.every(i => arrSet.has(i))
    );
}
