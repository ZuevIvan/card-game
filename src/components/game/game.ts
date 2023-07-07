import { goToPage } from '../../index';
import { difficulty } from '../difficulty/difficulty-component';
import { EndGame } from '../end-game/end-game';

interface Card {
    value: string | undefined;
    nod: Element | null;
}
let arrCards: Array<string> = [];

export const getSuit = (num: number) => {
    switch (num) {
        case 1:
            return 'spades';
        case 2:
            return 'hearts';
        case 3:
            return 'diamonds';
        case 4:
            return 'clubs';
        default:
            return 'error';
    }
};
export const getRank = (num: number) => {
    switch (num) {
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'jack';
        case 12:
            return 'queen';
        case 13:
            return 'king';
        case 14:
            return 'ace';
        default:
            return 'error';
    }
};
const checkTheWin = () => {
    const cards: HTMLElement[] = Array.from(
        document.querySelectorAll('.game__card')
    );
    for (const card of cards) {
        if (card.dataset.status !== 'open') {
            return false;
        }
    }
    return true;
};
const checkTheCuple = (firstOpenCard: Card, secondOpenCard: Card) => {
    const minEl: HTMLElement | null = document.querySelector(
        '.timer__counter--min'
    );
    const secEl: HTMLElement | null = document.querySelector(
        '.timer__counter--sec'
    );
    const min = minEl?.innerHTML;
    const sec = secEl?.innerHTML;
    if (min && sec) {
        if (firstOpenCard.value !== secondOpenCard.value) {
            EndGame(false, { min: min, sec: sec });
        } else {
            firstOpenCard.nod?.setAttribute('data-status', 'open');
            secondOpenCard.nod?.setAttribute('data-status', 'open');

            if (checkTheWin()) {
                EndGame(true, { min: min, sec: sec });
            } else {
                firstOpenCard.value = '';
                firstOpenCard.nod = null;

                secondOpenCard.value = '';
                secondOpenCard.nod = null;
            }
        }
    }
};

const startGame = () => {
    const firstOpenCard: Card = {
        value: '',
        nod: null,
    };
    const secondOpenCard: Card = {
        value: '',
        nod: null,
    };
    // актвируем кнопку Начать заново
    const newGame: HTMLElement | null = document.querySelector('.new-game');
    if (newGame) {
        newGame.classList.add('new-game--active');
        newGame.addEventListener('click', () => {
            goToPage('Difficulty');
        });
    }

    // запуск таймера
    const minEl: HTMLElement | null = document.querySelector(
        '.timer__counter--min'
    );
    const secEl: HTMLElement | null = document.querySelector(
        '.timer__counter--sec'
    );

    let second = '';
    let minute = '';
    setInterval(() => {
        if (secEl && minEl) {
            second = (Number(secEl.innerHTML) + 1).toString();
            if (Number(second) < 60) {
                secEl.innerHTML = Number(second) < 10 ? '0' + second : second;
            } else {
                minute = (Number(minEl.innerHTML) + 1).toString();
                minEl.innerHTML = Number(minute) < 10 ? '0' + minute : minute;
                secEl.innerHTML = '00';
            }
        }
    }, 1000);

    // Ивент на клик карты
    const cards = document.querySelectorAll('.game__card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            // проверка, чтобы ивент не отрабатывал на уже открытые карты
            const htmlCard = card as HTMLElement;
            if (htmlCard.dataset.status !== 'open') {
                htmlCard.setAttribute(
                    'src',
                    `./images/card/${htmlCard.dataset.value}.jpg`
                );
                // если первая карта открыта переворачиваем вторую и проверяем пара ли это
                if (!firstOpenCard.value) {
                    firstOpenCard.value = htmlCard.dataset.value;
                    firstOpenCard.nod = htmlCard;
                } else {
                    secondOpenCard.value = htmlCard.dataset.value;
                    secondOpenCard.nod = htmlCard;
                    checkTheCuple(firstOpenCard, secondOpenCard);
                }
            }
        });
    });
};
export const fillCardsArray = (numbers: number, arrCards: string[]) => {
    // генерация карт
    let rank = '';
    let suit = '';
    if (numbers > 72) {
        numbers = 72;
    }
    for (let i = 0; i < numbers / 2; i++) {
        // проверка на больше одной пары одинаковых карт в игре
        do {
            rank = getRank(Math.floor(Math.random() * 9) + 6);
            suit = getSuit(Math.floor(Math.random() * 4) + 1);
        } while (
            arrCards.includes(
                `<img data-value="${rank}-of-${suit}" class="game__card" src="./images/card/${rank}-of-${suit}.jpg" alt="card"/>`
            )
        );

        const card = `<img data-value="${rank}-of-${suit}" class="game__card" src="./images/card/${rank}-of-${suit}.jpg" alt="card"/>`;

        // Поиск пустого случайного слота
        let index = Math.floor(Math.random() * numbers);
        let isFindSlot = false;
        do {
            if (!arrCards[index]) {
                arrCards[index] = card;
                isFindSlot = true;
            } else if (index === numbers - 1) {
                index = 0;
            } else {
                index++;
            }
        } while (!isFindSlot);

        // добавляем пару
        index = Math.floor(Math.random() * numbers);
        // поиск случайного места для пары
        isFindSlot = false;
        do {
            if (!arrCards[index]) {
                arrCards[index] = card;
                isFindSlot = true;
            } else if (index === numbers - 1) {
                index = 0;
            } else {
                index++;
            }
        } while (!isFindSlot);
    }

    // переворачиваем карты, рубашкой вверх
    setTimeout(() => {
        const cards = document.querySelectorAll('.game__card');
        cards.forEach((card) => {
            card.setAttribute('src', './images/card/dealer-shirt.jpg');
        });
    }, 5000);
};

export const Game = (app: HTMLElement) => {
    // опции сложности
    arrCards = [];
    switch (difficulty) {
        case 1:
            fillCardsArray(6, arrCards);
            break;
        case 2:
            fillCardsArray(12, arrCards);
            break;
        case 3:
            fillCardsArray(18, arrCards);
            break;
        default:
            break;
    }
    app.innerHTML = `
    <div class="container">
        <div class="game">
            <div class="header">
                <div class="timer">
                    <div class="timer__text">
                        <div class="timer__text-min">min</div>
                        <div class="timer__text-sec">sec</div>
                    </div>
                    <div class="timer__counter">
                    <span class="timer__counter--min">00</span>.<span class="timer__counter--sec">00</span></div>
                </div>
                <button class="new-game">Начать заново</button>
            </div>

            <main class="game-wrap">
                <div class="game__field">
                    ${arrCards.map((card) => card).join('')}
                </div>
            </main>
        </div>
    </div>
  `;

    // Запуск игры, активность кнопок и запуск таймера после предпоказа карт
    setTimeout(startGame, 5000);
};
