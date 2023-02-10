
let ganador = sessionStorage.getItem("ganador");
let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));
let textVictoria = document.getElementById("texto-victoria-vampiros");
let factionVictory = document.getElementById("faction-victory-text");
let victoryImage = document.getElementById("victory-avatar");

if (ganador == "X") {
    let player1 = document.getElementById("player1");
    player1.innerHTML = `¡ENHORABUENA ${datosSesion.player1}!`;
    textVictoria.innerHTML = "Esa última jugada ha sido como una bala de plata para tu rival. Has vencido esta vez, pero recuerda que la guerra continúa."
    factionVictory.innerHTML = "LOS VAMPIROS GANAN"
    victoryImage.innerHTML = `<img src="../img/vampiro-pixelart.png" class="avatar-pixel-art" alt="vampire-pixel">`

} else {
    let player2 = document.getElementById("player1");
    player2.innerHTML = `¡ENHORABUENA ${datosSesion.player2}!`;
    textVictoria.innerHTML = "Con ese movimiento has clavado una estaca en el corazón de tu rival. Has vencido esta vez, pero recuerda que la guerra continúa."
    factionVictory.innerHTML = "LOS HOMBRES LOBO GANAN"
    victoryImage.innerHTML = `<img src="../img/hombrelobo-pixelart.png" class="avatar-pixel-art" alt="vampire-pixel">`
};