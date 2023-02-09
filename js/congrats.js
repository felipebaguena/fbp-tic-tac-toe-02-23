let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

player1.innerHTML = `¡ENHORABUENA ${datosSesion.player1}!`;

player2.innerHTML = `${datosSesion.player2}`;