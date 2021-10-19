let btn = document.querySelector("#btn");
let outPut = document.querySelector("#outPut");

let random = [Math.floor(Math.random() * 10)];

function randomGame() {
  let input = document.querySelector("#input").value;
  if (input == random) {
    outPut.innerHTML = `you guessed right, it was ${random}!!!`;
    document.querySelector("#playAgain").innerHTML = "Refresh to play again"
  } else if (input > random) {
    outPut.innerHTML = "Too High!";
  } else if (input < random) {
    outPut.innerHTML = "Too Low!";
  }
}