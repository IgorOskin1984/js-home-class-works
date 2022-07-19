"use strict";
//debugger
const get = (x) => document.querySelectorAll(x);
let numbers,
    signs,
    display,
    buttonC,
    signValue,
    item,
    num,
    a,
    total,
    res,
    mrc,
    mrcTotal,
    inputSpan,
    div = document.querySelector("div.display");

window.addEventListener("DOMContentLoaded", (ev) => {
    [...numbers] = get("input.black");
    buttonC = numbers.pop();
    [...signs] = get("input.pink");
    res = document.querySelector("input.orange");
    display = document.querySelector("div.display > input");
    [...mrc] = get("input.gray");

    //вызов функций======================================
    onclickNumber();
    onclickSign();
    result();
    reset();
    mrcButtons();
}, false)


//функция для кнопок памяти==============================
const mrcButtons = () => {
    mrc.forEach((item) => {
        item.addEventListener("click", (e) => {
            //debugger
            //работает только если есть тотал
            if (total || a || num) {
                //m+ =====================================
                if (item.value === "m+") {
                    //при первом нажатии
                    if (!inputSpan) {
                        inputSpan = document.createElement("span");
                        div.append(inputSpan);
                        inputSpan.innerText = item.value;
                        if (a) { mrcTotal = parseFloat(a) }
                        else if (num) { mrcTotal = parseFloat(num) }
                        else { mrcTotal = total }

                    }
                    //при повторном нажатии
                    else {
                        if (a) { mrcTotal = mrcTotal + parseFloat(a) }
                        else if (num) { mrcTotal = mrcTotal + parseFloat(num) }
                        else { mrcTotal = mrcTotal + total }
                    }
                }
                //m- ==================================
                else if (item.value === "m-") {
                    //при первом нажатии
                    if (!inputSpan) {
                        inputSpan = document.createElement("span");
                        div.append(inputSpan);
                        inputSpan.innerText = item.value;
                        if (a) { mrcTotal = parseFloat(a) }
                        else if (num) { mrcTotal = parseFloat(num) }
                        else { mrcTotal = total }
                    }
                    //при повторном нажатии
                    else {
                        if (a) { mrcTotal = mrcTotal - parseFloat(a) }
                        else if (num) { mrcTotal = mrcTotal - parseFloat(num) }
                        else { mrcTotal = mrcTotal - total }
                    }
                }

                //mrc===============
                else if (item.value === "mrc") {
                    //при первом нажатии
                    if (mrcTotal) {
                        display.value = mrcTotal;
                        total = mrcTotal;
                        mrcTotal = 0;
                        inputSpan.remove();
                        inputSpan = 0;
                    }
                    //при повторном нажатии
                    else {
                        inputSpan = 0;
                        a = 0;
                        num = 0;
                        total = 0;
                        mrcTotal = 0;
                        signValue = 0;
                        display.value = num;
                    }
                }
            }
        })
    })
}



//функция определения знака и действия с ним===============================
function onclickSign() {
    signs.forEach((item) => {
        item.addEventListener("click", (e) => {
            //умножение==========
            if (item.value === "*") {
                signValue = item.value;
                if (a || total) {
                    if (num) { mult() }
                }
                a = num;
                num = 0;
            }
            //умножение отр чисел=======
            else if (signValue === "*" && item.value === "-") {
                if (a || total) {
                    if (num) { mult() }
                    else {
                        signValue = item.value;
                        num = 0;
                    }
                }
                else {
                    num = item.value;
                    display.value = num;
                }
            }
            //деление============
            else if (item.value === "/") {
                signValue = item.value;
                if (a || total) {
                    if (num) { division() }
                }
                a = num;
                num = 0;
            }
            //деление отр чисел===========
            else if (signValue === "/" && item.value === "-") {
                if (a || total) {
                    if (num) { division() }
                    else {
                        signValue = item.value;
                        num = 0;
                    }
                }
                else {
                    num = item.value;
                    display.value = num;
                }
            }
            //сложение
            else if (item.value === "+") {
                signValue = item.value;
                if (a || total) {
                    if (num) { plus() }
                }
                a = num;
                num = 0;
            }
            //сложение отр чисел
            else if (signValue === "+" && item.value === "-") {
                if (a || total) {
                    if (num) { plus() }
                    else {
                        signValue = item.value;
                        num = 0;
                    }
                }
                else {
                    num = item.value;
                    display.value = num;
                }

            }
            //вычитание============
            else if (item.value === "-") {
                //присвоение знака минус (работа с отрицательными числами)============

                //делаем знак минус, если еще нет num 
                if (!a && !num && !signValue && !total) {
                    num = item.value;
                    display.value = num;
                }
                //делаем знак минус, если уже есть а
                else if (a && !num && signValue && !total) {
                    num = item.value;
                    display.value = num;
                }
                //делаем знак минус, если уже тотал и мат знак "-"
                else if ((!a && !num && signValue && total)) {
                    num = item.value;
                    display.value = num;
                }
                // мат действия======================
                else {
                    signValue = item.value;
                    if (a || total) {
                        if (num) { minus() }
                    }
                    else {
                        if (!a) {
                            a = num;
                            num = 0;
                        }
                        else {
                            num = signValue;
                            a = num;
                            num = 0;
                        }
                    }
                }
            }
        })
    })
}





//функция onclick на цифры===================== 
function onclickNumber() {
    numbers.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (!num) {
                num = e.target.value
            }
            else {
                num += e.target.value
            }
            display.value = num;
        })
    })
}


//функция умножения=============
const mult = () => {
    if (!total) {
        total = parseFloat(a) * parseFloat(num);
    }
    else {
        total = total * parseFloat(num);
    }
    display.value = total;
}

//функция деления=============
const division = () => {
    if (num === "0" || num === "-0") {
        total = "ERROR";
    }
    else if (!total) {
        total = parseFloat(a) / parseFloat(num);
    }
    else {
        total = total / parseFloat(num);
    }
    display.value = total;
}

//функция вычитания=============
const minus = () => {
    if (!total) {
        total = parseFloat(a) - parseFloat(num);
    }
    else {
        total = total - parseFloat(num)
    }
    display.value = total;
    a = 0;
    num = 0;
    //signValue = 0;
}

//функция сложения==============
function plus() {
    if (!total) {
        total = parseFloat(a) + parseFloat(num);
    }
    else {
        total = total + parseFloat(num)
    }
    display.value = total;
}


//функция вычисления результата===========================
function result() {
    res.addEventListener("click", (e) => {
        if (signValue === "+") {
            plus()
        } else if (signValue === "-") {
            minus()
        } else if (signValue === "*") {
            mult()
        }
        else if (signValue === "/") {
            division()
        }
        display.value = total;
        a = 0;
        num = 0;
        signValue = 0;
    })
}

//функция сброса==========================================
function reset() {
    buttonC.addEventListener("click", (e) => {
        a = 0;
        num = 0;
        total = 0;
        mrcTotal = 0;
        signValue = 0;
        display.value = num;
        inputSpan.remove();
    })
}
