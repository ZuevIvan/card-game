// Получаем все кнопки выбора уровня сложности
const levelButtons = document.querySelectorAll('.button');

let selectedLevel = null;

// Функция для установки выбранного уровня сложности
function selectLevel(event) {
    // Удаляем класс 'active' у всех кнопок
    levelButtons.forEach(button => button.classList.remove('active'));

    // Добавляем класс 'active' к выбранной кнопке
    event.target.classList.add('active');

    // Устанавливаем выбранный уровень сложности
    selectedLevel = parseInt(event.target.dataset.level);
}

// Добавляем обработчик события для каждой кнопки выбора уровня сложности
levelButtons.forEach(button => {
    button.addEventListener('click', selectLevel);
});

// Функция обработки нажатия кнопки "Старт"
function handleStartGame() {
    if (selectedLevel !== null) {
        // Осуществляем перенаправление на новую страницу с фотографией
        switch (selectedLevel) {
            case 1:
                window.location.href = './easy.html';
                break;
            case 2:
                window.location.href = './medium.html';
                break;
            case 3:
                window.location.href = './hard.html';
                break;
            default:
                console.log('Неправильный уровень сложности');
        }
    } else {
        console.log('Пожалуйста, выберите уровень сложности');
    }
}

// Добавляем обработчик события для кнопки "Старт"
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', handleStartGame);
