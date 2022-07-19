"use strict";
const get = x => document.getElementById(x);
let
    time,
    sec = 0,
    min = 0,
    hrs = 0,
    getSec = get("sec"),
    getmin = get("min"),
    getHrs = get("hours");

//функция изменения цвета.................................
const colorChange = (y) => {
    let div = document.querySelectorAll("div.stopwatch-display")
    div[0].classList.remove("silver", "red", "green")
    div[0].classList.add(y)
}
//функция запуска таймера..................................

//функция одного шага
function oneSec() {
    sec++;
    if (sec > 59) {
        sec = 0;
        min++
        if (min > 60) {
            min = 0;
            hrs++
            if (hrs > 24) {
                hrs = 0;
            }
        }
    }
}
//функция вывода данных
function add() {
    if (sec < 10) {
        getSec.innerText = `0${sec}`;
    }
    else {
        getSec.innerText = sec;
    }
    if (min < 10) {
        getmin.innerText = `0${min}`;
    }
    else {
        getmin.innerText = min;
    }
    if (hrs < 10) {
        getHrs.innerText = `0${hrs}`;
    }
    else {
        getHrs.innerText = hrs;
    }
}

//функция объединения двух функций для setInterval
const timer = () => {
    oneSec();
    add()
}
//итоговая функция запуска таймера
const timerOn = () => {
    if (!time) {
        time = setInterval(timer, 1000)
    }
}

//функция остановки таймера..........................
const stop = () => {
    time =  clearInterval(time);
}

//функция сброса таймера..........................
function timerReset() {
    stop();
    sec = 0;
    min = 0;
    hrs = 0;
    getSec.innerText = `0${sec}`;
    getmin.innerText = `0${min}`;
    getHrs.innerText = `0${hrs}`;
}

//вызов функций на нужной кнопке
get("start").onclick = () => {
    colorChange("green");
    timerOn();
}
get("stop").onclick = () => {
    colorChange("red");
    stop();
}
get("reset").onclick = () => {
    colorChange("silver");
    timerReset();
}