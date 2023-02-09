
let tablero = Array.from(document.getElementsByClassName("square"));

let turno = true;

let fichaP1 = 3;
let fichaP2 = 3;
let fichasColocadas = 0;

let miTablero = ["","","","","","","","",""];

let juegoFinalizado = false;
let fichaRetirada = false;

let combinacionesGanadoras = [
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
    combinacionesGanadoras.map(combinacionGanadora => {
        let [pos1, pos2, pos3] = combinacionGanadora;
        if (miTablero[pos1] === miTablero[pos2] && miTablero[pos2] === miTablero[pos3] && miTablero[pos1] !== "") {
        
        console.log(`Ha ganado: ${miTablero[pos1]}`);
        juegoFinalizado = true;
        // cambioPantallaVictoria();
        if (miTablero[pos1] === 'X') {
            window.open("../pages/congrats-vampires.html", "_self");
        } else if (miTablero[pos1] === 'O') {
            window.open("../pages/congrats-werewolves.html", "_self");
          }
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

let players = {
    player1 : "",
    player2 : ""
}

let inputs = Array.from(document.getElementsByClassName("namePlayer"));

inputs.map(
    elemento => {
        elemento.addEventListener("input", ()=>{

            for(let jugador in players){
                if(elemento.name == jugador){
                    let value = elemento.value;
                    
                    if (!/^[a-zA-Z0-9\s]+$/.test(value)) {
                        document.getElementById(elemento.id).placeholder = "Carácter no válido";
                        document.getElementById(elemento.id).value = "";
                        value = "";

                        setTimeout(function() {
                            document.getElementById(elemento.id).placeholder = "Introduce tu nombre";
                            }, 2000);
                    }

                    players[jugador] = elemento.value;

                }
            }
        })
    }
)

const cambiaPantalla = () => {

    if( (players.player1 === '') || (players.player2 === '') ){

        return;
    }

    sessionStorage.setItem("playersInfo", JSON.stringify(players));

        window.open("../pages/game-tabletop.html","_self");
}



// const cambioPantallaVictoria = () => {
//     if (miTablero[pos1] === 'X') {
//       window.open("../pages/congrats-vampires.html", "_self");
//     } else if (miTablero[pos1] === 'O') {
//       window.open("../pages/congrats-werewolves.html", "_self");
//     }
//   };