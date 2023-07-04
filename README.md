# Документация приложения

## Описание
Этот документ содержит информацию о приложении и инструкции по его запуску, сборке, установке пакетов и выполнению тестов.

## Ссылка на приложение
[Find a couple](https://komoza.github.io/cards-game/)

## Мой стек

В моем проекте "find-a-couple" используется следующий стек технологий и инструментов:

- TypeScript: Я использую TypeScript вместо обычного JavaScript для разработки приложения, что позволяет использовать статическую типизацию и дополнительные возможности языка.
- SCSS: Я использую SCSS (Sass) для стилизации моего проекта. SCSS предоставляет удобные функции, вложенные стили и переменные, упрощающие процесс разработки и поддержку стилей.
- Webpack: Я использую Webpack для сборки моего проекта. Webpack позволяет объединять и оптимизировать мои файлы JavaScript, CSS и другие ресурсы, а также обеспечивает возможность использования модулей и загрузчиков.
- Jest: Для тестирования моего проекта я использую Jest, популярный фреймворк для тестирования JavaScript и TypeScript. Он обеспечивает широкий спектр возможностей для написания и запуска тестов, а также проверку покрытия кода тестами.
- gh-pages: Для размещения моего проекта в Интернете я использую gh-pages, инструмент, позволяющий развертывать статические сайты на GitHub Pages.
- Другие зависимости: В моем проекте также используются различные пакеты и зависимости:
  - copy-webpack-plugin
  - css-loader
  - css-minimizer-webpack-plugin
  - html-webpack-plugin 
  - mini-css-extract-plugin 
  - sass
  - sass-loader
  - style-loader
  - ts-jest
  - ts-loader
  - typescript
  - webpack-cli
  - webpack-dev-server.
  
Этот стек технологий обеспечивает удобную и эффективную разработку, сборку, тестирование и развертывание моего проекта "find-a-couple".

## Предварительные требования
Перед запуском приложения убедитесь, что на вашем компьютере установлены следующие программы:

* Node.js
* npm (Node Package Manager)

## Установка

Для установки необходимых пакетов приложения выполните следующую команду в терминале:

`npm install`

## Использование

### Запуск приложения
Для запуска приложения используйте следующую команду:

`npm run start`
### Сборка приложения
Для сборки приложения в режиме продакшн выполните следующую команду:

`npm run build`
### Запуск тестов

Для выполнения тестов приложения используйте следующую команду:

`npm run test`
### Результаты тестов
#### Приложение включает следующие тесты со своими результатами:
getSuit
- should return "spades" when the input is 1 (1 ms)
- should return "hearts" when the input is 2 (1 ms)
- should return "diamonds" when the input is 3
- should return "clubs" when the input is 4
- should return "error" when the input is not 1, 2, 3, or 4
  
getRank
- should return "six" when the input is 6
- should return "seven" when the input is 7
- should return "eight" when the input is 8
- should return "nine" when the input is 9
- should return "ten" when the input is 10
- should return "jack" when the input is 11 (1 ms)
- should return "king" when the input is 13
- should return "queen" when the input is 12
- should return "ace" when the input is 14 (1 ms)
- should return "error" when the input is not between 6 and 14
  
fillCardsArray
- should generate the level easy of unique cards
- should generate the level medium of unique cards (1 ms)
- should generate the level hard of unique cards
- should generate the specified number of unique cards
- should generate 72 unique cards when numbers is greater than 72
- should not generate any cards when numbers is 0
- should not generate any cards when numbers is negative
