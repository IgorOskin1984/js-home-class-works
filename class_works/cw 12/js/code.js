"use script";

//сделать форму регистрации покупвателя
//имя мин 2 бкв лат
//вам мин 2 бкв кирил
//возраст - число
//тел +38
//индекс - число
//статус по умолчанию - активный клиент

//клиент вводит данные, мы делаем проверку данных

//после проверки сохраняем данные в брауэере и после сохранения выводим на страницу
window.addEventListener(`DOMContentLoaded`, () => {


    const [...inputsAll] = document.querySelectorAll("input");

    const inputs = inputsAll.filter((item) => {
        return item.type !== `button`
    });
    const submitBut = document.querySelector(`[type = button]`);

    //конструктор
    class User {
        constructor(name, lastName, age, tel, index) {
            this.name = name;
            this.lastName = lastName;
            this.age = age;
            this.tel = tel;
            this.index = index;
        }

    }



    const validate = (target) => {
        switch (target.id) {
            case `name`: return /^[a-z]{2,}$/i.test(target.value);
            case `lastName`: return /^[a-z]{2,}$/i.test(target.value);
            case `age`: return /^\d{1,2}$/.test(target.value);
            case `tel`: return /^\+38\d{10}$/.test(target.value);
            case `index`: return /^\d{5}$/.test(target.value);
            default: throw new Error(`Error`)
        }
    };

    inputs.forEach((item) => {
        item.addEventListener(`change`, (e) => {
            validate(e.target);
        })
    });
    //слушаем click для кнопки сохранить
    submitBut.addEventListener(`click`, () => {
        //debugger
        let res = inputs.map((item) => {
            return validate(item)
        });
        if (res.includes(false)) {
            alert(`erorr`)
        }
        else {
            let user = [];
            user.push(
                new User(...inputs.map((item) => {
                    return item.value
                })));
            console.log(user);
            localStorage.user = JSON.stringify(user);

            inputs.forEach((item) => {
                if (item.id === `tel`) {
                    item.value = `+38`
                }
                else { item.value = ``; }
            })


        }
        createTable();

    });

    function createTable() {
        let DataFromlocalStorage = JSON.parse(localStorage.user)

        DataFromlocalStorage.forEach((item) => {
            let tr = document.createElement(`tr`),
                tdName = document.createElement(`td`),
                tdLastName = document.createElement(`td`),
                tdAge = document.createElement(`td`),
                tdTel = document.createElement(`td`),
                tdIndex = document.createElement(`td`),
                tdChack = document.createElement(`td`),
                chackbox = document.createElement(`input`);

            chackbox.checked = item.status;
            tdName.innerText = item.name;
            tdLastName.innerText = item.lastName;
            tdAge.innerText = item.age;
            tdTel.innerText = item.tel;
            tdIndex.innerText = item.index;

            chackbox.type = `chackbox`;

            tdChack.append(chackbox);
            tr.append(tdName, tdLastName, tdAge, tdIndex, tdChack);
            document.querySelector(`tbody`).append(tr)
        })
    }
})



