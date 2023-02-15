let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");
const gameType = sessionStorage.getItem("gameType", "playerGame");

let datosSesion = JSON.parse(sessionStorage.getItem("playersInfo"));

if (gameType == "cpuGame") {
    player1.innerHTML = `${datosSesion.player3}`;
    player2.innerHTML = `${"VAN HELSING"}`;

    
    document.getElementById("ww-img-tb").classList.add("hidden");
    document.getElementById("van-helsing-img-tb").classList.remove("hidden");

} else {
    player1.innerHTML = `${datosSesion.player1}`;
    player2.innerHTML = `${datosSesion.player2}`;
}

