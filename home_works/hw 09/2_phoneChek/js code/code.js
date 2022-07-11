"use strict";
//создаем и объявляем переменные
let div = document.createElement("div"),
    input = document.createElement("input"),
    btn = document.createElement("button"),
    patern = /\d{3}-\d{3}-\d{2}-\d{2}/,
    phone;

//выводим на экран
document.body.append(div);
div.appendChild(input);
div.appendChild(btn);
input.placeholder = "099-999-99-99"
btn.innerText = `chek button`

//вешаем onclick 
btn.onclick = () => {
    phone = input.value;
    if (patern.test(phone)) {
        div.style.backgroundColor = `green`
        document.location = `https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg`
    }
    //выводим див с ошибкой перед дивом с инпутом с помощью insertBefore
    else {
        let er = document.createElement("div")
        er.style.backgroundColor = `red`
        er.innerText = `Error`
        document.body.insertBefore(er, div)
    }
}
