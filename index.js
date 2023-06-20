// Получаем все кнопки выбора уровня сложности
const levelButtons = document.querySelectorAll(".button");

let selectedLevel = null;

// Функция для установки выбранного уровня сложности
function selectLevel(event) {
  // Удаляем класс 'active' у всех кнопок
  levelButtons.forEach((button) => button.classList.remove("active"));

  // Добавляем класс 'active' к выбранной кнопке
  event.target.classList.add("active");

  // Устанавливаем выбранный уровень сложности
  selectedLevel = parseInt(event.target.dataset.level);
}

// Добавляем обработчик события для каждой кнопки выбора уровня сложности
levelButtons.forEach((button) => {
  button.addEventListener("click", selectLevel);
});

// Добавляем обработчик события для кнопки "Старт"
const startButton = document.querySelector(".start-button");
if (startButton) {
  startButton.addEventListener("click", function () {
    if (selectedLevel !== null) {
      switch (selectedLevel) {
        case 1:
          window.location.href = "./easy.html";
          break;
        case 2:
          window.location.href = "./medium.html";
          break;
        case 3:
          window.location.href = "./hard.html";
          break;
        default:
          console.log("Неправильный уровень сложности");
      }
    } else {
      console.log("Пожалуйста, выберите уровень сложности");
    }
  });
}

// Кнопка возвращения на страницу с уровнем сложности
const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", function () {
  console.log("назад");
  window.location.href = "./index.html";
});

