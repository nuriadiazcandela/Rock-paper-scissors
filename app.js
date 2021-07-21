const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    const computerOptions = ['piedra', 'papel', 'tijeras'];
    options.forEach((option) => {
      option.addEventListener('click', function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoise = computerOptions[computerNumber];

        compareHands(this.textContent, computerChoise);

        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoise}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoise) => {
    const winner = document.querySelector('.winner');
    if (playerChoice === computerChoise) {
      winner.textContent = 'Empate!';
      return;
    }
    //Check for Piedra
    if (playerChoice === 'piedra') {
      if (computerChoise === 'tijeras') {
        winner.textContent = 'Tú ganas!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Oooh! Inténtalo otra vez!';
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Papel
    if (playerChoice === 'papel') {
      if (computerChoise === 'tijeras') {
        winner.textContent = 'Oooh! Inténtalo otra vez!';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Tú ganas!';
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Tijeras
    if (playerChoice === 'tijeras') {
      if (computerChoise === 'piedra') {
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Tú ganas!';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
  updateScore();
};

game();
