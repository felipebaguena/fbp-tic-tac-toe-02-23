
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

const quitarFicha = (celda) => {
    celda.innerHTML = "";
    miTablero[celda.id] = "";
}


//FUNCIONAMIENTO DE LA CPU

let = cpuOcupada = false

const colocarFichaCPU = () => {

    let celdaLibre = [];
    for (let i = 0; i < miTablero.length; i++){
        if(miTablero[i] === "") {
            celdaLibre.push(i);
        }
    }
    
    let aleatoria = Math.floor(Math.random() * celdaLibre.length);
    let celdaAleatoria = celdaLibre[aleatoria];

    miTablero[celdaAleatoria] = "O";
    tablero[celdaAleatoria].innerHTML = "O";
    fichaP2--;
    document.getElementById('fichasJugador2').innerHTML = `FICHAS RESTANTES: ${fichaP2}`;
    fichasColocadas++;
    comprueboGanador();
    turno = !turno;
    console.log(miTablero);
    console.log("pone ficha")
    console.log(fichaP2)
};

const quitarFichaAleatoriaCPU = () => {
    let celdaRobada = Math.floor(Math.random() * 9);
    while (miTablero[celdaRobada] !== "O") {
        celdaRobada = Math.floor(Math.random() * 9);
    }
    quitarFicha(tablero[celdaRobada]);
    fichaP2++;
};

const jugadaCPU = () => {
    cpuOcupada = true
    if (fichaP2 !== 0) {
        setTimeout(colocarFichaCPU, Math.random() * (1000 - 500) + 500);
    } else if (fichaP2 === 0) {
        setTimeout(quitarFichaAleatoriaCPU, Math.random() * (800 - 500) + 500);
        setTimeout(colocarFichaCPU, Math.random() * (1500 - 800) + 800);
    }
    cpuOcupada = false
};


//CONDICIONES DE VICTORIA

const comprueboGanador = () => {
    combinacionesGanadoras.map(combinacionGanadora => {
        let [pos1, pos2, pos3] = combinacionGanadora;
        
        if (miTablero[pos1] === miTablero[pos2] && miTablero[pos2] === miTablero[pos3] && miTablero[pos1] !== "") {
        
        console.log(`Ha ganado: ${miTablero[pos1]}`);
        juegoFinalizado = true;
            if (miTablero[pos1] === 'X') {
                sessionStorage.setItem("ganador", "X")
            window.open("../pages/congrats-vampires.html", "_self");
            } else if (miTablero[pos1] === 'O') {
                sessionStorage.setItem("ganador", "O")
                window.open("../pages/congrats-vampires.html", "_self");
            }
        }
    });
};

//JUGADAS Y CONDICIONALES SOBRE EL TABLERO

tablero.map(
    (celda) => {

        celda.addEventListener('click', ()=> {
            if (juegoFinalizado) return;
            if (gameType === "cpuGame" && !turno) return;

            if (celda.innerHTML === "X" && turno == true && fichaRetirada === false && fichasColocadas >= 6) {
                if (!cpuOcupada){
                quitarFicha(celda);
                }
                fichaP1++;
                fichaRetirada = true;
                document.getElementById('fichasJugador1').innerHTML = `FICHAS RESTANTES: ${fichaP1}`;
                // if (gameType === "cpuGame") jugadaCPU();

            } else if (celda.innerHTML === "O" && turno !== true && fichaRetirada === false && fichasColocadas >= 6) {

                quitarFicha(celda);
                fichaP2++;
                fichaRetirada = true;
                document.getElementById('fichasJugador2').innerHTML = `FICHAS RESTANTES: ${fichaP2}`;
                // if (gameType === "cpuGame") jugadaCPU();

            } else if((celda.innerHTML === "") && (fichaP1 > 0 || fichaP2 > 0)){
                if (!cpuOcupada){
                celda.innerHTML = (turno) ? "X" : "O";
                }
                (turno) ? fichaP1-- : fichaP2--;
                miTablero[celda.id] = (turno) ? "X" : "O";
                comprueboGanador();
                turno = !turno;
                fichasColocadas++;
                fichaRetirada = false;

                document.getElementById('fichasJugador1').innerHTML = `FICHAS RESTANTES: ${fichaP1}`;
                document.getElementById('fichasJugador2').innerHTML = `FICHAS RESTANTES: ${fichaP2}`;

                if (gameType === "cpuGame") jugadaCPU();
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

                    players[jugador] = elemento.value.toUpperCase();

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


//ELECCIÓN DE MODOS DE JUEGO

const modePVP = () => {
    document.getElementById("electionMode-p").classList.add("hidden");
    document.getElementById("electionMode-cpu").classList.add("hidden");
    document.getElementById("nombres-home-vampires").classList.remove("hidden");
    document.getElementById("nombres-home-werewolves").classList.remove("hidden");
    document.getElementById("botonPlayers").classList.remove("hidden")

    let textElection = document.getElementById("game-type-election-txt");
    textElection.innerHTML = "ELIGE FACCION";
    
}

const modeCPU = () => {
    document.getElementById("buttons-election-mode").classList.add("hidden");
    // document.getElementById("factionCPU").classList.remove("hidden");

    document.getElementById("factionCPU").classList.add("hidden");
    document.getElementById("nombres-home-vampires").classList.remove("hidden");
    document.getElementById("boton-cpu-play").classList.remove("hidden");
    

    let textElection = document.getElementById("game-type-election-txt");
    textElection.innerHTML = "EL ÚLTIMO VAMPIRO";
}

const vampiresCPU = () => {
    document.getElementById("factionCPU").classList.add("hidden");
    document.getElementById("nombres-home-vampires").classList.remove("hidden");
    document.getElementById("boton-cpu-play").classList.remove("hidden");
}

const cambiaPantallaHistoria = () => {

    if( (players.player1 === '') && (players.player2 === '') ){

        return;
    }

    sessionStorage.setItem("playersInfo", JSON.stringify(players));
    sessionStorage.setItem("gameType", "cpuGame")
        window.open("../pages/game-tabletop.html","_self");
}

