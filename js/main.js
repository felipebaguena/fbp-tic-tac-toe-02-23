
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

//Mapeare el array inputs para darle a todos los elementos el evento addeventlistener input
//para controlar cuando vayamos escribiendo en ellos

inputs.map(
    elemento => {
        elemento.addEventListener("input", ()=>{

            //Según vamos escribiendo en el input, iremos actualizando el objeto players..
            //metiendo los valores en la propiedad correspondiente (player1 si escribo en el input de player1 por ejemplo)

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

                    //Ahora es cuando meto el valor en el objeto
                    players[jugador] = elemento.value;


                }
            }
        })
    }
)


//Creo la función cambiaPantalla que guardará en sessionStorage y después cambiará de pantalla

const cambiaPantalla = () => {

    //Primero comprobamos que los nombres de los players NO esten vacios....

    if( (players.player1 === '') || (players.player2 === '') ){

        //Si uno de los 2 está vacio...ejecuto un return y así salgo de la función

        return;
    }

    //Si llego a este punto es porque los nombres si que tenían algún valor..

    sessionStorage.setItem("playersInfo", JSON.stringify(players));

    //Después de haber guardado .... cambiamos de página

        window.open("../pages/game-tabletop.html","_self");
}