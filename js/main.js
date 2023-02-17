
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
let cuentaTurno = 0;

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

// CPU ALEATORIA

// const jugadaCPU = () => {
//     cpuOcupada = true
//     if (fichaP2 !== 0) {
//         setTimeout(colocarFichaCPU, Math.random() * (1000 - 500) + 500);
//     } else if (fichaP2 === 0) {
//         setTimeout(quitarFichaAleatoriaCPU, Math.random() * (800 - 500) + 500);
//         setTimeout(colocarFichaCPU, Math.random() * (1500 - 800) + 800);
//     }
//     cpuOcupada = false
// };

// CPU PERSIGUE LA JUGADA

const fichaRobadaCPU = () => {
    fichaP2--;
    document.getElementById("fichasJugador2").innerHTML = `FICHAS RESTANTES: ${fichaP2}`;
    fichasColocadas++;
    fichaRetirada = false;
    cpuOcupada = false;
    turno = !turno;
}

const jugadaCPU = () => {
    cuentaTurno++;
    console.log(cuentaTurno);
    alertPlay();
    cpuOcupada = true;
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let combinacionGanadora = combinacionesGanadoras[i];
        let celda1 = miTablero[combinacionGanadora[0]];
        let celda2 = miTablero[combinacionGanadora[1]];
        let celda3 = miTablero[combinacionGanadora[2]];
    
        if (celda1 === "O" && celda2 === "O" && celda3 === "") {
            if (fichaP2 === 0) {
            console.log("Victoria1");
            setTimeout(quitarFichaAleatoriaCPU, Math.random() * 500);
            }
            setTimeout(() => {
            miTablero[combinacionGanadora[2]] = "O";
            tablero[combinacionGanadora[2]].innerHTML = "O";
            comprueboGanador();
            fichaRobadaCPU();
            }, 1000);
            return;
            }
        if (celda1 === "O" && celda2 === "" && celda3 === "O") {
            if (fichaP2 === 0) {
            setTimeout(quitarFichaAleatoriaCPU, Math.random() * +500);
            }
            setTimeout(() => {
            miTablero[combinacionGanadora[1]] = "O";
            tablero[combinacionGanadora[1]].innerHTML = "O";
            comprueboGanador();
            fichaRobadaCPU();
            }, 1000);
            return;
            }
        if (celda1 === "" && celda2 === "O" && celda3 === "O") {
            if (fichaP2 === 0) {
            setTimeout(quitarFichaAleatoriaCPU, Math.random() * +500);
            }
            setTimeout(() => {
            miTablero[combinacionGanadora[0]] = "O";
            tablero[combinacionGanadora[0]].innerHTML = "O";
            comprueboGanador();
            fichaRobadaCPU();
            }, 1000);
            return;
        }
        }
    
        evitaVictoriaCPU();
};

const evitaVictoriaCPU = () => {
    cpuOcupada = true;
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        let combinacionGanadora = combinacionesGanadoras[i];
        let celda1 = miTablero[combinacionGanadora[0]];
        let celda2 = miTablero[combinacionGanadora[1]];
        let celda3 = miTablero[combinacionGanadora[2]];
    
        if (celda1 === "X" && celda2 === "X" && celda3 === "") {
            if (fichaP2 === 0) {
            console.log("Victoria1");
            setTimeout(quitarFichaAleatoriaCPU, Math.random() * 500);
            }
            setTimeout(() => {
            miTablero[combinacionGanadora[2]] = "O";
            tablero[combinacionGanadora[2]].innerHTML = "O";
            comprueboGanador();
            fichaRobadaCPU();
            }, 1000);
            return;
            }
        if (celda1 === "X" && celda2 === "" && celda3 === "X") {
            if (fichaP2 === 0) {
            setTimeout(quitarFichaAleatoriaCPU, Math.random() * +500);
            }
            setTimeout(() => {
            miTablero[combinacionGanadora[1]] = "O";
            tablero[combinacionGanadora[1]].innerHTML = "O";
            comprueboGanador();
            fichaRobadaCPU();
            }, 1000);
            return;
            }
        if (celda1 === "" && celda2 === "X" && celda3 === "X") {
            if (fichaP2 === 0) {
            setTimeout(quitarFichaAleatoriaCPU, Math.random() * +500);
            }
            setTimeout(() => {
            miTablero[combinacionGanadora[0]] = "O";
            tablero[combinacionGanadora[0]].innerHTML = "O";
            comprueboGanador();
            fichaRobadaCPU();
            }, 1000);
            return;
        }
        }
        if (fichaP2 !== 0) {
            console.log("NOVictoria")
            setTimeout(colocarFichaCPU, Math.random() * (1000 - 500) + 500);
        } else if (fichaP2 === 0) {
            console.log("Robo1")
            setTimeout(quitarFichaAleatoriaCPU, Math.random() * (800 - 500) + 500);
            setTimeout(colocarFichaCPU, Math.random() * (1500 - 800) + 800);
        }
        cpuOcupada = false;
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
    player2 : "",
    player3 : "",
    player4 : ""
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

const continueCPU = () => {

    document.getElementById("buttons-election-mode").classList.add("hidden");
    document.getElementById("boton-continuar").classList.remove("hidden");
    document.getElementById("text-story-mode").classList.remove("hidden");

    const texto = "La lucha contra los hombres lobo se recrudece, pero esta no es la amenaza más peligrosa a la que te enfrentas. Las leyendas hablan de un depredador más hábil que tú. Profesor, doctor y filósofo, pero ante todo, un formidable cazador. Algunos lo llaman Abraham, pero el nombre que te hace temblar es ... Van Helsing.";
    let i = 0;

    mostrarLetra = () => {
    if (i < texto.length) {
    document.getElementById("text-story-mode").innerHTML += texto.charAt(i);
    i++;
    setTimeout(mostrarLetra, 50);
    }
    }

mostrarLetra();
    


    let textElection = document.getElementById("game-type-election-txt");
    textElection.innerHTML = "EL ÚLTIMO VAMPIRO";
    
}

const modeCPU = () => {
    document.getElementById("text-story-mode").classList.add("hidden");
    document.getElementById("buttons-election-mode").classList.add("hidden");
    document.getElementById("boton-continuar").classList.add("hidden");
    document.getElementById("nombres-home-anciano").classList.remove("hidden");
    document.getElementById("boton-cpu-play").classList.remove("hidden");
    
    let textElection = document.getElementById("game-type-election-txt");
    textElection.innerHTML = "EL ÚLTIMO VAMPIRO";
    
}

const vampiresCPU = () => {

    document.getElementById("nombres-home-vampires").classList.remove("hidden");
    document.getElementById("boton-cpu-play").classList.remove("hidden");
}

const cambiaPantallaHistoria = () => {

    if(players.player3 === ''){
        return;

    }

    sessionStorage.setItem("playersInfo", JSON.stringify(players));
    sessionStorage.setItem("gameType", "cpuGame")
    window.open("../pages/game-tabletop.html","_self"); 

}

// ALERTS //

const alertPlay = () => {
    if (cuentaTurno === 2){
        document.getElementById("text-alert-play-id").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("text-alert-play-id").classList.add("hidden");
        }, 1500);
    } else if (cuentaTurno === 4){
        document.getElementById("text-alert-play-id-2").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("text-alert-play-id-2").classList.add("hidden");
        }, 1500);
    } else if (cuentaTurno === 7){
        document.getElementById("text-alert-play-id-3").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("text-alert-play-id-3").classList.add("hidden");
        }, 1500);
    } else if (cuentaTurno === 9){
        document.getElementById("text-alert-play-id-4").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("text-alert-play-id-4").classList.add("hidden");
        }, 1500);
    }
};
