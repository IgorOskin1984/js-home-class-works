"use script";


window.addEventListener(`DOMContentLoaded`, () => {
    //берём кнопки и бади
    const [...buttons] = document.querySelectorAll(`button`);
    const bodyBut = document.querySelector(`#body`)

    //слушаем клавиатуру
    bodyBut.addEventListener(`keydown`, (e) => {
        //ищем и удаляем стиль предыдущей кнопки
        let redBut = document.querySelector(`button.btn-active`);
        if (redBut) {
            redBut.classList.remove(`btn-active`);
        }
        //forEach
        buttons.forEach((item) => {
            //для Enter
            if (e.key === item.innerText) {
                item.classList.add(`btn-active`)
            }
            //для остальных через toLowerCase
            else if (e.key === item.innerText.toLowerCase()) {
                item.classList.add(`btn-active`)
            }
        })
    })
}) 