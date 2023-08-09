let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Inside Score Board
const player1ScoreBox = document.getElementById("player-1-score");
const player2ScoreBox = document.getElementById("player-2-score");

// Inside Score text
const player1ScoreUpdate = document.getElementById("player-1-score-update");
const player2ScoreUpdate = document.getElementById("player-2-score-update");

// Message Text
const messageText = document.getElementById("message");

// Roll and Reset Button
const rollBtn1 = document.getElementById("roll-btn1");
const rollBtn2 = document.getElementById("roll-btn2");
const restartBtn = document.getElementById("restart-btn");

const scoreBox1 = document.getElementById("score-box-1");
const scoreBox2 = document.getElementById("score-box-2");
const diceEl = document.querySelector(".dice");

function restartGame() {
  rollBtn1.style.display = "none";
  rollBtn2.style.display = "none";
  restartBtn.style.display = "block";
}

rollBtn1.addEventListener("click", startGame);

function startGame() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.src = `dice-${dice}.png`;
  if (player1Turn) {
    player1Score += dice;
    player1ScoreUpdate.textContent = player1Score;
    //player1ScoreBox.textContent = dice;
    scoreBox1.classList.remove("active");
    scoreBox2.classList.add("active");
    messageText.textContent = "Player-2 To Play";
    rollBtn2.style.display = "block";
    rollBtn1.style.display = "none";
    rollBtn2.addEventListener("click", startGame);
    rollBtn2.style.backgroundColor = "rgb(14, 162, 19)";
  } else {
    player2Score += dice;
    player2ScoreUpdate.textContent = player2Score;
    //player2ScoreBox.textContent = dice;
    scoreBox2.classList.remove("active");
    scoreBox1.classList.add("active");
    messageText.textContent = "Player-1 To Play";
    rollBtn1.style.display = "block";
    rollBtn2.style.display = "none";
    rollBtn1.addEventListener("click", startGame);
  }
  if (player1Score >= 30) {
    messageText.textContent = "Player 1 Won The Game";
    scoreBox2.classList.remove("active");
    scoreBox1.classList.add("active");
    restartGame();
  } else if (player2Score >= 30) {
    messageText.textContent = "Player 2 Won The Game";
    scoreBox1.classList.remove("active");
    scoreBox2.classList.add("active");
    restartGame();
  }
  player1Turn = !player1Turn;
}
