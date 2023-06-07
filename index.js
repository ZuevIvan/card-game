 // Получаем кнопки 
 const levelButtons = document.querySelectorAll('.button');
 const startButton = document.querySelector('.start-button');

 // Переменная для хранения выбранного уровня сложности
 let selectedLevel = null;

 // Функция для обработки выбора уровня сложности
 function handleLevelSelection(event) {
     // Убираем активное состояние у всех кнопок
     levelButtons.forEach(button => {
         button.classList.remove('active');
     });

     // Добавляем активное состояние выбранной кнопке
     const selectedButton = event.target;
     selectedButton.classList.add('active');

     // Получаем выбранный уровень сложности из атрибута data-level кнопки
     selectedLevel = selectedButton.getAttribute('data-level');
 }

 // Функция для обработки нажатия на кнопку "Старт"
 function handleStartGame() {
     // Проверяем, был ли выбран уровень сложности
     if (selectedLevel !== null) {
         // Здесь вы можете выполнить любую логику, связанную с запуском игры с выбранным уровнем сложности
         console.log('Запуск игры с уровнем сложности:', selectedLevel);
     } else {
         console.log('Пожалуйста, выберите уровень сложности');
     }
 }

 // Назначаем обработчики событий для кнопок уровней сложности
 levelButtons.forEach(button => {
     button.addEventListener('click', handleLevelSelection);
 });

 function handleStartGame() {
    if (selectedLevel !== null) {
        // Осуществляем перенаправление на новую страницу с фотографией
        switch (selectedLevel) {
            case '1':
                window.location.href = 'easy.html';
                break;
            case '2':
                window.location.href = 'medium.html';
                break;
            case '3':
                window.location.href = 'hard.html';
                break;
            default:
                console.log('Неправильный уровень сложности');
        }
    } else {
        console.log('Пожалуйста, выберите уровень сложности');
    }
}

 // Назначаем обработчик события для кнопки "Старт"
 startButton.addEventListener('click', handleStartGame);