const flipButton = document.getElementById('flipButton');
flipButton.addEventListener('click', flipCards);

// Сохраняем исходные пути изображений карт
const cards = document.querySelectorAll('.hub-cart .card');
cards.forEach((card, index) => {
    const suitName = card.parentElement.classList[1];
    const imagePath = `img/${index + 1} ${suitName}.png`;
    card.setAttribute('data-original-src', imagePath);
});

function flipCards() {
    const isOpen = flipButton.textContent === 'Открыть карты';

    if (isOpen) {
        flipButton.textContent = 'Перевернуть рубашкой вверх';
        cards.forEach((card) => {
            const originalSrc = card.getAttribute('data-original-src');
            card.setAttribute('src', originalSrc);
        });
    } else {
        flipButton.textContent = 'Открыть карты';
        cards.forEach((card) => {
            card.setAttribute('src', 'img/рубашка.png');
        });
    }
}
