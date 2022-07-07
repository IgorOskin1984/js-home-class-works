"use strict";
//объявляем глобальные переменные
let diametr,
    round;

//главная функция..........................
const main = () => {
    //функция запроса диаметра
    usersPrompt()
    //функция проверки
    diametr = checkInput(diametr);
    //функция для создания кругов
    makeRound();
    //функция удаления круга
    delite()
}



//функция запроса диаметра..........................
function usersPrompt() {
    return diametr = parseFloat(prompt("diametr (from 1 to 200)?", "100"));
}

//функция проверки............................
function checkInput(x) {
    while (isNaN(x) || x <= 0 || x > 200) {
        alert("type correct value");
        x = parseFloat(prompt("diametr (from 1 to 200)?", "100"));
    }
    return x;
}

//функция для создания кругов...............................
const makeRound = () => {
    //делаем большой див для кругов
    let section = document.createElement("div");
    section.style.marginTop = "20px"
    document.body.append(section);

    //цикл для новой строки
    for (let i = 0; i < 10; i++) {
        //цикл для создания кругов
        for (let j = 0; j < 10; j++) {
            //создаем див-круг
            round = document.createElement("div");
            //задаем стили див-кругу

            round.className = "circle"
            round.style.cssText = `
                display : inline-block;
                border : 3px solid black;
                border-radius : 50%;
                background-color : hsl(${Math.floor(Math.random() * 360)}, 50%, 50%);
                width : ${diametr}px;
                height : ${diametr}px;
                `;
            //добавляем див-круг на страницу
            section.append(round);
        }

        //создаем и выводим перенос строки
        let hr = document.createElement("br");
        section.append(hr)
    }
}

//функция удаления круга............................................
function delite() {
    //делаем массив из всех circle
    let [...circle] = document.querySelectorAll(".circle");
    //let circle = document.querySelectorAll(".circle");

    //делаем forEach в котором говорим, что каждый элемент это функция, которая удаляет элемент при onclick  
    circle.forEach(el => {
        el.onclick = function () {
            //el.remove();
            el.style.display = "none";
        }
    })


    //то же самое циклом for..............................................

    //    for (let i = 0; i < circle.length; i++) {
    //        circle[i].onclick = function () {
    //            circle[i].remove();
    //        }
    //    }
}


