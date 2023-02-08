player1 = JSON.parse(sessionStorage.getItem("player1"));
player2 = JSON.parse(sessionStorage.getItem("player2"));

document.getElementById("player1-name").innerHTML = player1.name;
document.getElementById("player2-name").innerHTML = player2.name;