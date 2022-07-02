"use strict";
// Создаем массив со словами
let words = [
    "лук",
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
],

    // Выбираем случайное слово и переобразовываем его в массив
    word = [],
    x = words[Math.floor(Math.random() * words.length)];

for (let i = 0; i < x.length; i++) {
    word[i] = x[i]
}

// Создаем итоговый массив
let answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
// Игровой цикл
while (remainingLetters > 0) {
    // Показываем состояние игры
    alert(answerArray.join(" "));// Запрашиваем вариант ответа
    let guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");

    if (guess === null) {
        // Выходим из игрового цикла
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {

        let myFunction = (el, index) => {
            if (el === guess) {
                answerArray[index] = guess;
                remainingLetters--;
            }
        }

        // Обновляем состояние игры
        word.forEach(myFunction);


    }

    // Конец игрового цикла
}


// Отображаем ответ и поздравляем игрока
alert(answerArray.join("").toUpperCase() + "!");
alert(`Отлично! Было загадано слово   "${word.join("").toUpperCase()}" `);