"use strict";

window.addEventListener("DOMContentLoaded", () => {
    //задание 1=============================================
    //Створи клас, який буде створювати користувачів з ім'ям та прізвищем. Додати до класу метод для виведення імені та прізвища


    //создаём переменные
    const but = document.createElement("button");
    let fName,
        lName,
        i = 1,
        sect = document.querySelector(`section`);

    but.innerText = `Create a new member`
    document.body.prepend(but);

    //клик на кнопке
    but.addEventListener("click", dataPrompt)
    function dataPrompt() {
        const pattern = /\d/g;
        do {
            fName = prompt("Type your first name");
            if (pattern.test(fName)) {
                alert(`no digits please`)
            }
        }
        while (pattern.test(fName))

        do {
            lName = prompt("Type your first name");
            if (pattern.test(lName)) {
                alert(`no digits please`)
            }
        }
        while (pattern.test(lName))

        const user = new NewUser;
        user.show()
    }

    //создаём конструктор
    function NewUser() {
        this.firstName = fName;
        this.lastName = lName;
        //создаём функцию show, отображаем данные с большой буквы
        NewUser.prototype.show = () => {
            let p = document.createElement(`p`);
            p.innerText = (`данные юзера ${i}: Имя: ${this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1)}; Фамилия ${this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1)}`);
            sect.append(p);
            i++;
        }
    }

    //задание 2=============================================
    //Створи список, що складається з 4 аркушів. Використовуючи джс зверніся до 2 li і з використанням навігації по DOM дай 1 елементу синій фон, а 3 червоний
    const ul = document.createElement(`ul`);
    for (let i = 1; i < 5; i++) {
        let li = document.createElement(`li`);
        li.innerText = `${i}`;
        ul.appendChild(li)
    }
    let divList = document.querySelector(`div.list`);
    divList.append(ul);
    divList.after(document.createElement(`hr`));

    let li_2 = divList.querySelector(`ul > :nth-child(2)`)
    li_2.innerText += ` green`;
    li_2.className = `li-green`;
    let li_4 = ul.querySelector(`:last-child`);
    li_4.innerText += ` red`;
    //li_4.style.color = `red`
    li_4.className = `li-red`;


    //задание 3=================================================
    //Створи див висотою 400 пікселів і додай на нього подію наведення мишки. При наведенні мишки виведіть текст координати, де знаходиться курсор мишки 3
    //<!-- 33 минута -->

    const divEx_3 = document.createElement(`div`);//создаю
    divEx_3.className = "div-ex3";//присваеваю класс
    document.body.append(divEx_3);//вывожу на экран
    let divEx_3_p = document.createElement(`p`);//элемент для вывода данных при mousemove
    divEx_3.after(divEx_3_p);
    divEx_3_p.after(document.createElement(`hr`));// разделитель

    divEx_3.addEventListener(`mousemove`, function (e) {
        divEx_3_p.innerHTML = "Событие onmouse<b>move</b> X:" + e.offsetX + " Y:" + e.offsetY;
    })


    divEx_3.addEventListener(`mouseover`, (e) => {
        divEx_3.append(`X: ${e.clientX} / Y: ${e.clientY}`);
        divEx_3.append(document.createElement(`br`));
    })

    //задание 4=================================================
    //Створи кнопки 1,2,3,4 і при натисканні на кнопку виведи інформацію про те, яка кнопка була натиснут

    let butEx_4,
        divButtons = document.createElement("div");
    divButtons.className = "buttons"
    document.body.append(divButtons)

    for (let i = 1; i < 5; i++) {
        butEx_4 = document.createElement(`button`)
        butEx_4.innerText = i;
        divButtons.append(butEx_4)
    }
    const [...butEx_4_Arrey] = divButtons.querySelectorAll(`button`);

    butEx_4_Arrey.forEach((item) => {
        item.addEventListener(`click`, (e) => {
            alert(e.target.innerText)
        })
    })
    divButtons.after(document.createElement(`hr`));



    //задание 5=================================================
    //Створи див і зроби так, щоб при наведенні на див див змінював своє положення на сторінці
    //<!-- 35минута -->

    //создаём элементы и переменные
    const divEx_5 = document.createElement(`div`)
    divEx_5.className = `divEx_5`;
    document.body.append(divEx_5);
    let pixel = 0,
        intrId = 0;//пер для запуска и выключения интервала

    //событие mouseover
    divEx_5.addEventListener(`mouseover`, () => {
        clearInterval(intrId);// очищаем интервал
        intrId = setInterval(() => {//запускаем интервал
            divEx_5.style.left = pixel + `px`
            pixel++
        }, 20)
    })

    //событие mouseleave аналогично mouseover 
    divEx_5.addEventListener(`mouseleave`, () => {
        clearInterval(intrId);
        intrId = setInterval(() => {
            divEx_5.style.left = pixel + `px`
            pixel--;
            if (pixel < 0) {
                clearInterval(intrId);
            }
        }, 1)
    })

    document.body.append(document.createElement(`hr`))

    //задание 6=================================================
    //Створи поле для введення кольору, коли користувач вибере якийсь колір, зроби його фоном body
    //<!-- видео с  гугл  диска 1ч26мин -->

    const inputColor = document.createElement("input");
    inputColor.type = "color";
    document.body.append(inputColor);
    const butColor = document.createElement(`button`);
    butColor.innerText = `body color`
    inputColor.after(butColor);

    butColor.addEventListener(`click`, () => {
        document.body.style.background = inputColor.value;
        //let inputColorValue = inputColor.value
    })
    document.body.append(document.createElement(`hr`))

    //задание 7-8 ===========================================
    //Створи інпут для введення логіну, коли користувач почне вводити дані в інпут виводь їх в консоль

    //Створіть поле для введення даних у полі введення даних виведіть текст під полем


    //создаём элементы
    const inputLogin = document.createElement(`input`);
    document.body.append(inputLogin);
    let outputSpan = document.createElement(`span`);
    inputLogin.before(outputSpan);

    //задаём действия на события
    inputLogin.addEventListener(`click`, () => {
        inputLogin.value = "";
    })

    inputLogin.addEventListener(`mouseleave`, () => {
        if (inputLogin.value) {
            console.log(inputLogin.value);
        }
    })

    inputLogin.addEventListener(`input`, (e) => {
        outputSpan.innerText = e.target.value
    })

    document.body.append(document.createElement(`hr`))







})