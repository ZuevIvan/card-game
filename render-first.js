function renderPage() {
  const appEl = document.querySelector("#app");

  const htmlContent = `
      <div class="container">
        <div class="square">
          <h1 class="title">Выберите <br> сложность</h1>
          <div class="buttons">
            <button class="button" data-level="1">1</button>
            <button class="button" data-level="2">2</button>
            <button class="button" data-level="3">3</button>
          </div>
          <button class="start-button">Старт</button>
        </div>
      </div>
    `;

  appEl.innerHTML = htmlContent;

  const levelButtons = document.querySelectorAll(".button");
  let selectedLevel = null;

  function selectLevel(event) {
    levelButtons.forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
    selectedLevel = parseInt(event.target.dataset.level);
  }

  levelButtons.forEach((button) => {
    button.addEventListener("click", selectLevel);
  });

  const startButton = document.querySelector(".start-button");
  startButton.addEventListener("click", function () {
    if (selectedLevel !== null) {
      renderPageCard(selectedLevel);
    }
  });
}

function renderPageCard(level) {
  const appEl = document.querySelector("#app");

  const htmlContent = `
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
        ${
          level >= 1
            ? `<div class="one suit">
          <img class="card" src="/img/туз пики.png" alt="#">
          <img class="card" src="/img/король пики.png" alt="#">
          <img class="card" src="/img/дама пики.png" alt="#">
          <img class="card" src="/img/валет пики.png" alt="#">
          <img class="card" src="/img/10 пики.png " alt="#">
          <img class="card" src="/img/9 пики.png" alt="#">
          <img class="card" src="/img/8 пики.png" alt="#">
          <img class="card" src="/img/7 пики.png" alt="#">
          <img class="card" src="/img/6 пики.png" alt="#">
        </div>`
            : ""
        }
        ${
          level >= 1
            ? `<div class="one suit">
          <img class="card" src="/img/туз черви.png" alt="#">
          <img class="card" src="/img/король черви.png" alt="#">
          <img class="card" src="/img/валет черви.png" alt="#">
          <img class="card" src="/img/валет черви.png" alt="#">
          <img class="card" src="/img/10 черви.png" alt="#">
          <img class="card" src="/img/9 черви.png" alt="#">
          <img class="card" src="/img/8 черви.png" alt="#">
          <img class="card" src="/img/7 черви.png" alt="#">
          <img class="card" src="/img/6 черви.png" alt="#">
        </div>`
            : ""
        }
        ${
          level >= 2
            ? `<div class="one suit">
          <img class="card" src="/img/туз бубны.png" alt="#">
          <img class="card" src="/img/король бубны.png" alt="#">
          <img class="card" src="/img/дама бубны.png" alt="#">
          <img class="card" src="/img/валет бубны.png" alt="#">
          <img class="card" src="/img/10 бубны.png " alt="#">
          <img class="card" src="/img/9 бубны.png" alt="#">
          <img class="card" src="/img/8 бубны.png" alt="#">
          <img class="card" src="/img/7 бубны.png" alt="#">
          <img class="card" src="/img/6 бубны.png" alt="#">
        </div>`
            : ""
        }
        ${
          level >= 3
            ? `<div class="one suit">
          <img class="card" src="/img/туз крести.png" alt="#">
          <img class="card" src="/img/король крести.png" alt="#">
          <img class="card" src="/img/дама крести.png" alt="#">
          <img class="card" src="/img/валет крести.png" alt="#">
          <img class="card" src="/img/10 крести.png " alt="#">
          <img class="card" src="/img/9 крести.png" alt="#">
          <img class="card" src="/img/8 крести.png" alt="#">
          <img class="card" src="/img/7 крести.png" alt="#">
          <img class="card" src="/img/6 крести.png" alt="#">
        </div>`
            : ""
        }
      </div>
      <div class="hub-menu">
        <button class="back-button">Выбор уровня сложности</button>
        <button id="flipButton" class="flip-button">Перевернуть рубашкой вверх</button>
      </div>
      <script src="timer.js"></script>
      <script src="flip.js"></script>
    `;

  appEl.innerHTML = htmlContent;

  const backButton = document.querySelector(".back-button");
  backButton.addEventListener("click", function () {
    renderPage();
  });
}

renderPage();
