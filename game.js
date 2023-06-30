// game.js
function generateCards(level) {
    const suits = ['пики', 'черви', 'бубны', 'крести'];
    const ranks = ['туз', 'король', 'дама', 'валет', '10', '9', '8', '7', '6'];
  
    const cards = [];
  
    for (let i = 0; i < level * 2; i++) {
      const randomSuit = suits[Math.floor(Math.random() * suits.length)];
      const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
      const card = {
        suit: randomSuit,
        rank: randomRank,
        flipped: false,
        matched: false,
      };
      cards.push(card);
    }
  
    return cards;
  }
  
  function renderGame(level) {
    const appEl = document.querySelector("#app");
    const cards = generateCards(level);
  
    let htmlContent = `
      <div class="hub-timer">
        <div class="timer-show">
          <div class="timer-text">
            <p class="timer-text-min">min</p>
            <p class="timer-text-sek">sek</p>
          </div>
          <div id="timer" class="timer">00:00</div>
        </div>
        <div class="timer-btn">
          <button onclick="Timer.start()" class="time-btn">Начать</button>
          <button onclick="Timer.stop()" class="time-btn">Остановить</button>
        </div>
      </div>
      <div class="hub-cart">
    `;
  
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      htmlContent += `
        <div class="one suit">
          <img class="card ${card.flipped ? 'flipped' : ''}" src="/img/${card.rank} ${card.suit}.png" alt="#">
        </div>
      `;
    }
  
    htmlContent += `
      </div>
      <div class="hub-menu">
        <button class="back-button">Выбор уровня сложности</button>
        <button id="flipButton" class="flip-button">Перевернуть рубашкой вверх</button>
      </div>
      <script src="timer.js"></script>
      <script src="flip.js"></script>
      <script src="game-logic.js"></script> <!-- Добавлен новый скрипт game-logic.js -->
    `;
  
    appEl.innerHTML = htmlContent;
  
    const backButton = document.querySelector(".back-button");
    backButton.addEventListener("click", function () {
      renderPage();
    });
  
    setTimeout(function () {
      flipAllCards();
    }, 5000);
  }
  
  function flipAllCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.add('flipped');
    });
  }
  
  function compareCards() {
    const flippedCards = document.querySelectorAll('.card.flipped');
    if (flippedCards.length === 2) {
      const [card1, card2] = flippedCards;
  
      if (card1.src === card2.src) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        checkGameStatus();
      } else {
        setTimeout(function () {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
        }, 1000);
      }
    }
  }
  
  function checkGameStatus() {
    const cards = document.querySelectorAll('.card');
    const matchedCards = document.querySelectorAll('.card.matched');
  
    if (cards.length === matchedCards.length) {
      alert('Вы победили!');
    }
  }
  
  renderPage();
  
  const cardContainer = document.querySelector('.hub-cart');
  cardContainer.addEventListener('click', function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('card') && !clickedElement.classList.contains('flipped')) {
      clickedElement.classList.add('flipped');
      compareCards();
    }
  });
  