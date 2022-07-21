"use script";
//- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
//- Поведінка поля має бути такою:
//- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
//- Коли вибрано фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: `Поточна ціна: ${значення з поля введення}`. Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
//- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
//- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.

document.addEventListener("DOMContentLoaded", () => {
    //переменные
    const input = document.createElement("input"),
        checkSpan = document.querySelector("span"),
        span = document.createElement("span"),
        but = document.createElement("button");

    //вводим данные
    input.type = "number";
    input.placeholder = "Price";
    document.body.prepend(input);
    but.innerText = "X";

    //функция фокус
    input.addEventListener("focus", () => {
        input.className = "focus-border"
    })

    //функция убрали фокус
    input.addEventListener("blur", () => {
        input.classList.remove("focus-border")
        //если мы получили отрицательное значение
        if (input.value < 0) {
            input.classList.remove();
            input.className = "error"
            input.value = ""
            input.after("Please enter correct price")
        }
        //если значение положительное
        else if (input.value) {
            //если спана еще нет
            if (!checkSpan) {
                document.body.prepend(span);
                span.innerText = `Поточна ціна: ${input.value}`;
                span.after(but);
            }
            //если спан уже есть
            if (checkSpan) {
                span.innerText = "";
                span.innerText = `Поточна ціна: ${input.value}`
            }
        }
        //если значения нет
        else {
            span.innerText = "";
        }
    })

    //функция для кнопки
    but.addEventListener("click", () => {
        span.remove();
        but.remove();
        input.value = "";
    })
})