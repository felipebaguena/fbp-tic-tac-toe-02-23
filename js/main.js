
let tablero = Array.from(document.getElementsByClassName("square"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;
let fichasColocadas = 0;

let miTablero = ["","","","","","","","",""];

let juegoFinalizado = false;
let fichaRetirada = false;

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

            if (celda.innerHTML === "X" && turno == true && fichaRetirada === false && fichasColocadas >= 6) {

                celda.innerHTML = "";
                miTablero[celda.id] = "";
                fichaP1++;
                fichaRetirada = true;

            } else if (celda.innerHTML === "O" && turno !== true && fichaRetirada === false && fichasColocadas >= 6) {

                celda.innerHTML = "";
                miTablero[celda.id] = "";
                fichaP2++;
                fichaRetirada = true;

            } else if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
            
                celda.innerHTML = (turno) ? "X" : "O";
                (turno) ? fichaP1-- : fichaP2--;
                miTablero[celda.id] = (turno) ? "X" : "O";
                comprueboGanador();
                turno = !turno;
                fichasColocadas++;
                fichaRetirada = false;
            }
        });          
    }
)

//SESSION STORAGE//


let player1 = {
    name: ''
};

let player2 = {
    name: ''
};

let inputs = Array.from(document.getElementsByTagName("input"));

inputs.map((input) => {
    input.addEventListener('input', () => {
        let value = input.value;

        if (value.length > 20) {
            value = value.slice(0, 20);
            document.getElementById(input.id).value = value;
        }

        if (!/^[a-zA-Z]+$/.test(value)) {
            document.getElementById(input.id).placeholder = "Introduce letras";
            document.getElementById(input.id).value = "";
            value = "";
        }

        if (input.id === "player1-name") {
            player1.name = value;
            if (player1.name === "") {
                sessionStorage.removeItem("player1");
            } else {
                sessionStorage.setItem("player1", JSON.stringify(player1));
            }
        } else if (input.id === "player2-name") {
            player2.name = value;
            if (player2.name === "") {
                sessionStorage.removeItem("player2");
            } else {
                sessionStorage.setItem("player2", JSON.stringify(player2));
            }
        }
        console.log(player1, player2);
    });
});

