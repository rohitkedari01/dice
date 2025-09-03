
window.addEventListener("load",function refreshsound () {
    var diceroll = new Audio("sounds/dicroll.mp3");
    diceroll.play();
 } )

if (random > random2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";
    var winner1 = new Audio("sounds/winner.mp3");
    winner1.play();
}else if (random < random2) {
    document.querySelector("h1").innerHTML="Player 2 Wins";
    var winner1 = new Audio("sounds/winner.mp3");
    winner1.play();
}else if (random === random2) {
    document.querySelector("h1").innerHTML="Its a draw";
    var sounddraw = new Audio("sounds/draw.mp3");
    sounddraw.play();

}






