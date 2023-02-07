
let tablero = Array.from(document.getElementsByClassName("square"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;

let miTablero = ["","","","","","","","",""];

let juegoFinalizado = false;

let combinacionGanadora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const comprueboGanador = () => {
    console.log(miTablero);
    combinacionGanadora.map(comparador => {
        let [pos1, pos2, pos3] = comparador;
        if (miTablero[pos1] === miTablero[pos2] && miTablero[pos2] === miTablero[pos3] && miTablero[pos1] !== "") {
        
        console.log(`Ha ganado: ${miTablero[pos1]}`);
        juegoFinalizado = true;
        }
    });
};

tablero.map(
    (celda) => {

        celda.addEventListener('click', ()=> {

            if (juegoFinalizado) return;

            if (celda.innerHTML === "X" && turno == true) {

                celda.innerHTML = "";
                miTablero[celda.id] = "";
                fichaP1++;

            } else if (celda.innerHTML === "O" && turno !== true) {

                celda.innerHTML = "";
                miTablero[celda.id] = "";
                fichaP2++;

            } else if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
            
                celda.innerHTML = (turno) ? "X" : "O";
                (turno) ? fichaP1-- : fichaP2--;
                miTablero[celda.id] = (turno) ? "X" : "O";
                comprueboGanador();
                turno = !turno;
            }
        });          
    }
)