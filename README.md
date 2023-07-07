# Документация приложения

## Описание

Этот документ содержит информацию о приложении и инструкции по его запуску, сборке, установке пакетов и выполнению тестов.

#### В ветке [main](https://github.com/Komoza/cards-game/tree/main) остутсвует папка dist с бандлом. Содержимое папки dist можно найти в ветке [gh-pages](https://github.com/Komoza/cards-game/tree/gh-pages) (с помощью которой разворачивается приложение на github)

## Ссылка на приложение

[Find a couple](https://komoza.github.io/cards-game/)

## Мой стек

В моем проекте "find-a-couple" используется следующий стек технологий и инструментов:

-   TypeScript
-   SCSS
-   Webpack
-   Jest
-   gh-pages

## Предварительные требования

Перед запуском приложения убедитесь, что на вашем компьютере установлены следующие программы:

-   Node.js
-   npm (Node Package Manager)

## Установка

Для установки необходимых пакетов приложения выполните следующую команду в терминале:

`npm install`

## Использование

### Сборка приложения

Для сборки приложения выполните следующую команду:

`npm run build`

### Запуск приложения

Для запуска приложения используйте следующую команду:

`npm run start`

#### (!!! Перед запуском необходимо собрать приложение)

### Запуск линтеров

Для проверки .scss файлов используйте следующую команду:

`npm run lint:scss`

Для проверки .ts файлов используйте следующую команду:

`npm run lint:ts`

Для одновременной проверки .ts и .scss файлов используйте следующую команду:

`npm run lint`

### Запуск тестов

Для выполнения тестов приложения используйте следующую команду:

`npm run test`

### Результаты тестов

#### Приложение включает следующие тесты со своими результатами:

getSuit

-   should return "spades" when the input is 1 (1 ms)
-   should return "hearts" when the input is 2 (1 ms)
-   should return "diamonds" when the input is 3
-   should return "clubs" when the input is 4
-   should return "error" when the input is not 1, 2, 3, or 4

getRank

-   should return "six" when the input is 6
-   should return "seven" when the input is 7
-   should return "eight" when the input is 8
-   should return "nine" when the input is 9
-   should return "ten" when the input is 10
-   should return "jack" when the input is 11 (1 ms)
-   should return "king" when the input is 13
-   should return "queen" when the input is 12
-   should return "ace" when the input is 14 (1 ms)
-   should return "error" when the input is not between 6 and 14

fillCardsArray

-   should generate the level easy of unique cards
-   should generate the level medium of unique cards (1 ms)
-   should generate the level hard of unique cards
-   should generate the specified number of unique cards
-   should generate 72 unique cards when numbers is greater than 72
-   should not generate any cards when numbers is 0
-   should not generate any cards when numbers is negative

## Перед каждым коммитом осуществляется проверка .scss и .ts файлов, а также запуск тестов
