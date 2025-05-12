let contador = 1;
let container = document.querySelector("#container")
let contadorX = [];
let contadorO = [];
let turn = document.querySelector("#turn");
let contador2 = 0;
let contador3 = 0;
const divsConDataId = container.querySelectorAll('div[data-id]');
const wins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
    [0, 4, 8], [2, 4, 6]           // diagonales
];
let span1 = document.querySelector("#span1")
let span2 = document.querySelector("#span2")
let span3 = document.querySelector("#span3")
let x = 0, o = 0, empate = 0;
let totalReset = document.querySelector("#reset")
container.addEventListener("click", (element) => {

    if (element.target.id != "container") {
        if (contador % 2 != 0 && contador <= 9) {
            if (element.target.textContent != "") {
                contadorX[contador2] = parseInt(element.target.dataset.id);
                contador++;
                contador2++;
                element.target.innerHTML = `<svg fill="#31c3bd" class"w-[10px] h-[10px] m-1" id="icon-x" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill-rule="evenodd"/></svg>`
                turn.innerHTML = `<svg fill="currentColor" id="icon-x-win" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="w-5">
                <path
                    d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                    fill-rule="evenodd" />
                </svg>
                <h2>TURN</h2>`;
            }
        }
        if (contador % 2 === 0 && contador <= 9) {
            if (element.target.textContent != "") {
                contadorO[contador3] = parseInt(element.target.dataset.id);
                contador++;
                contador3++;
                element.target.innerHTML = `<svg fill="#f2b137" id="icon-o" class"w-[10px] h-[10px] m-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>`
                turn.innerHTML = `<svg fill="currentColor" id="icon-o-win" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="w-5"><path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" /></svg>
                <h2>TURN</h2>`;
            }
        }
        if (checkWinner(contadorX)) {
            alert("X Gano")
            reset()
            x++;
            span1.textContent = `${x}`


        }
        else if (checkWinner(contadorO)) {
            alert("O Gano")
            reset()
            o++;
            span3.textContent = `${o}`

        }
        else if (!checkWinner(contadorX) && !checkWinner(contadorO) && contador === 10) {
            alert("EMPATE")
            reset()
            empate++;
            span2.textContent = `${empate}`
        }
    }
    console.log(contadorO)
    console.log(contadorX)
    console.log(checkWinner(contadorX))
    console.log(checkWinner(contadorO))


})


totalReset.addEventListener("click", () => {
    reset();
    x = 0;
    o = 0;
    empate = 0;
    span2.textContent = `${empate}`
    span3.textContent = `${o}`
    span1.textContent = `${x}`
})


function checkWinner(arr) {
    const arrSet = new Set(arr);

    // Comprobamos si alguna combinación ganadora está contenida en arrSet
    return wins.some(combination =>
        combination.every(i => arrSet.has(i))
    );
}

function reset() {
    contadorX = [];
    contadorO = [];
    contador = 1;
    contador2 = 0;
    contador3 = 0;
    turn.innerHTML = `<svg fill="currentColor" id="icon-x-win" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" class="w-5">
                <path
                    d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                    fill-rule="evenodd" />
                </svg>
                <h2>TURN</h2>`;
    divsConDataId.forEach(element => {
        element.textContent = " ";
    });

}


