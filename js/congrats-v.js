let player1 = document.getElementById("player1");

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

player1.innerHTML = `¡ENHORABUENA ${datosSesion.player1}!`;
