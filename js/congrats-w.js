let player2 = document.getElementById("player2");

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

player2.innerHTML = `¡ENHORABUENA ${datosSesion.player2}!`;