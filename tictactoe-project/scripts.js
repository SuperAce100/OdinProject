var icons = {
  x: '<div class="played"><i class="fas fa-times"></i></div>',
  o: '<div class="played"><i class="far fa-circle"></i></div>',
  star: '<div class="played"><i class="fas fa-star"></i></div>',
  gear: '<div class="played"><i class="fas fa-cog"></i></div>',
  ghost: '<div class="played"><i class="fas fa-ghost"></i></div>',
  heart: '<div class="played"><i class="fas fa-heart"></i></div>',
  skull: '<div class="played"><i class="fas fa-skull"></i></div>',
  diamond: '<div class="played"><i class="fas fa-gem"></i></div>',
  music: '<div class="played"><i class="fas fa-music"></i></div>',
  sun: '<div class="played"><i class="fas fa-sun"></i></div>',
  moon: '<div class="played"><i class="fas fa-moon"></i></div>',
  rocket: '<div class="played"><i class="fas fa-rocket"></i></div>',
  leaf: '<div class="played"><i class="fas fa-leaf"></i></div>',
  cloud: '<div class="played"><i class="fas fa-cloud"></i></div>',
  book: '<div class="played"><i class="fas fa-book"></i></div>',
  pencil: '<div class="played"><i class="fas fa-pencil"></i></div>',
  globe: '<div class="played"><i class="fas fa-globe"></i></div>',
  star: '<div class="played"><i class="fas fa-star"></i></div>',
  trophy: '<div class="played"><i class="fas fa-trophy"></i></div>',
  camera: '<div class="played"><i class="fas fa-camera"></i></div>',
  paintBrush: '<div class="played"><i class="fas fa-paint-brush"></i></div>',
  guitar: '<div class="played"><i class="fas fa-guitar"></i></div>',
  car: '<div class="played"><i class="fas fa-car"></i></div>',
  coffee: '<div class="played"><i class="fas fa-coffee"></i></div>',
  pizza: '<div class="played"><i class="fas fa-pizza-slice"></i></div>',
  football: '<div class="played"><i class="fas fa-football-ball"></i></div>',
  bell: '<div class="played"><i class="fas fa-bell"></i></div>',
  bomb: '<div class="played"><i class="fas fa-bomb"></i></div>',
  tree: '<div class="played"><i class="fas fa-tree"></i></div>',
  smile: '<div class="played"><i class="fas fa-smile"></i></div>',
  frown: '<div class="played"><i class="fas fa-frown"></i></div>',
  magnet: '<div class="played"><i class="fas fa-magnet"></i></div>',
  plane: '<div class="played"><i class="fas fa-plane"></i></div>',
  train: '<div class="played"><i class="fas fa-train"></i></div>',
  umbrella: '<div class="played"><i class="fas fa-umbrella"></i></div>',
  clock: '<div class="played"><i class="fas fa-clock"></i></div>',
  fire: '<div class="played"><i class="fas fa-fire"></i></div>',
  water: '<div class="played"><i class="fas fa-water"></i></div>',
  paw: '<div class="played"><i class="fas fa-paw"></i></div>',
  key: '<div class="played"><i class="fas fa-key"></i></div>',
  gamepad: '<div class="played"><i class="fas fa-gamepad"></i></div>',
  ship: '<div class="played"><i class="fas fa-ship"></i></div>',
  diamond: '<div class="played"><i class="fas fa-diamond"></i></div>',
  spider: '<div class="played"><i class="fas fa-spider"></i></div>',
  cookie: '<div class="played"><i class="fas fa-cookie-bite"></i></div>',
  crown: '<div class="played"><i class="fas fa-crown"></i></div>',
  sword: '<div class="played"><i class="fas fa-sword"></i></div>',
  shield: '<div class="played"><i class="fas fa-shield-alt"></i></div>',
  robot: '<div class="played"><i class="fas fa-robot"></i></div>',
  alien: '<div class="played"><i class="fas fa-reddit-alien"></i></div>',
  angel: '<div class="played"><i class="fas fa-angel"></i></div>',
};

function Player(name, icon) {
  this.name = name;
  this.icon = icons[icon];

  this.wins = 0;
  this.addWin = function () {
    this.wins++;
  };
}

function Game() {
  this.gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  this.clearGame = function () {
    this.gameBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };

  this.checkForWin = function () {
    winMessage = '<div class="win">' + currentPlayer.icon + "</div>";

    // horizontal
    for (let i = 0; i < 3; i++) {
      const row = this.gameBoard[i];
      if (row[0] != "" && row[0] == row[1] && row[1] == row[2]) {
        for (let j = 0; j < 3; j++) {
          this.gameBoard[i][j] = winMessage;
        }
        return true;
      }
    }

    // vertical
    for (let i = 0; i < 3; i++) {
      if (
        this.gameBoard[0][i] != "" &&
        this.gameBoard[0][i] == this.gameBoard[1][i] &&
        this.gameBoard[1][i] == this.gameBoard[2][i]
      ) {
        for (let j = 0; j < 3; j++) {
          this.gameBoard[j][i] = winMessage;
        }
        return true;
      }
    }

    // diagonal
    if (
      this.gameBoard[0][0] != "" &&
      this.gameBoard[0][0] == this.gameBoard[1][1] &&
      this.gameBoard[1][1] == this.gameBoard[2][2]
    ) {
      for (let j = 0; j < 3; j++) {
        this.gameBoard[j][j] = winMessage;
      }
      return true;
    }

    if (
      this.gameBoard[0][2] != "" &&
      this.gameBoard[0][2] == this.gameBoard[1][1] &&
      this.gameBoard[1][1] == this.gameBoard[2][0]
    ) {
      this.gameBoard[0][2] = winMessage;
      this.gameBoard[1][1] = winMessage;
      this.gameBoard[2][0] = winMessage;
      return true;
    }

    // default
    return false;
  };

  this.playTurn = function (icon, row, col) {
    this.gameBoard[row][col] = icon;
    turnCount++;
    return this.checkForWin();
  };
}

function closeForm() {
  document.getElementById("playerForm").style.display = "none";
}

function configurePlayers() {
  player1 = new Player(
    document.getElementById("player1name").value,
    document.getElementById("player1icons").value
  );
  player2 = new Player(
    document.getElementById("player2name").value,
    document.getElementById("player2icons").value
  );

  // Close the form
  closeForm();

  // Update the displayed library
  console.log(player1.name);
  currentPlayer = player1;
  renderInfo();
}

function renderInfo() {
  let player1div = document.getElementById("player1");
  let player2div = document.getElementById("player2");

  player1div.innerHTML = player1.icon + " " + player1.name + " (" + player1.wins + " wins)";
  player2div.innerHTML = player2.icon + " " + player2.name + " (" + player2.wins + " wins)";

  if (currentPlayer == player1) {
    document.getElementById("player1").style.backgroundColor = "#f8ad9d";
    document.getElementById("player2").style.backgroundColor = "";
  } else {
    document.getElementById("player2").style.backgroundColor = "#f8ad9d";
    document.getElementById("player1").style.backgroundColor = "";
  }
}

async function renderGame(game) {
  let content = document.getElementById("content");
  content.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", `${i}${j}`);
      square.setAttribute("row", i);
      square.setAttribute("col", j);
      square.addEventListener("click", function () {
        handleClick(game, i, j);
      });
      square.innerHTML = game.gameBoard[i][j];
      content.appendChild(square);
    }
  }
}

let maingame = new Game();
let player1 = new Player("player1", "x");
let player2 = new Player("player2", "o");
let currentPlayer = player1;
let turnCount = 0;

function handleClick(game, row, col) {
  if (game.gameBoard[row][col] == "") {
    console.log(currentPlayer.name);
    if (game.playTurn(currentPlayer.icon, row, col)) {
      handleWin(currentPlayer, game);
    } else if (turnCount >= 9) {
      handleTie(game);
    }
    renderGame(game);
    currentPlayer = currentPlayer == player1 ? player2 : player1;

    if (currentPlayer == player1) {
      document.getElementById("player1").style.backgroundColor = "#f8ad9d";
      document.getElementById("player2").style.backgroundColor = "";
    } else {
      document.getElementById("player2").style.backgroundColor = "#f8ad9d";
      document.getElementById("player1").style.backgroundColor = "";
    }
  }
}

async function handleWin(winner, game) {
  renderGame(game);
  console.log(game.gameBoard);
  await new Promise((resolve) => setTimeout(resolve, 250));
  winner.addWin();
  alert("Congratulations, " + winner.name + "!");
  game.clearGame();
  turnCount = 0;
  renderInfo();
  renderGame(game);
}

async function handleTie(game) {
  renderGame(game);
  console.log(game.gameBoard);
  await new Promise((resolve) => setTimeout(resolve, 250));
  alert("It's a tie!");
  game.clearGame();
  turnCount = 0;
  renderInfo();
  renderGame(game);
}

renderGame(maingame);
