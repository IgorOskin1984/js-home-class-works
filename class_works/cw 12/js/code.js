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

    //ищем все input 
    const [...inputsAll] = document.querySelectorAll("input");
    //выбираем все input, кроме button 
    const inputs = inputsAll.filter((item) => {
        return item.type !== `button`
    });
    //ищем button
    const submitBut = document.querySelector(`[type = button]`);

    //создаём конструктор
    class User {
        constructor(name, lastName, age, tel, index) {
            this.name = name;
            this.lastName = lastName;
            this.age = age;
            this.tel = tel;
            this.index = index;
            this.status = true;
        }
    }

    //функция validate - проверка инпутов на regular expression
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

    //вызов функции validate для evnt change
    inputs.forEach((item) => {
        //всем спанам сделали класс normal-input
        item.className = `.normal-input`

        //слушаем change
        item.addEventListener(`change`, () => {
            validate(item);
            //1 - если уже была ошибка ,то 
            //а) - снова класс normal-input
            item.className = `.normal-input`;
            //б) - удаляем старый спан
            if (document.querySelector(`span`)) {
                document.querySelector(`span`).remove()
            }
            //2 - если ошибки ещё не было
            if (validate(item) !== true) {
                let span = document.createElement(`span`);
                span.innerText = `error`
                item.after(span);
                item.value = ``;
                item.className = `error`
            }
        })
    });

    //слушаем click для кнопки сохранить
    submitBut.addEventListener(`click`, () => {
        //создаём массив для результатов проверки validate (true or false)
        let res = inputs.map((item) => {
            return validate(item)
        });
        //если false, то выводим ошибку (лучше спаном после инпута)
        if (res.includes(false)) {
            alert(`erorr`)
        }

        //если true, то:
        else {
            // 1 - создаем массив, который будем помещать в localStorage 
            let arreyForLocalStorage = [];
            // 2 - помещаем в массив instance new User  
            arreyForLocalStorage.push(
                // 3 - new User принимает в себя новый массив на основе inputs
                new User(...inputs.map((item) => {
                    console.log(item.value);
                    return item.value
                })));


            // 4 - размещаем массив arreyForLocalStorage в localStorage
            localStorage.user = JSON.stringify(arreyForLocalStorage);

            //5 -очищаем inputы 
            inputs.forEach((item) => {
                if (item.id === `tel`) {
                    item.value = `+38`
                }
                else { item.value = ``; }
            })
        }

        //строим таблицу
        createTable();
    });

    function createTable() {
        //создаём переменную, в которую возвращаем значение из localStorage 
        let DataFromlocalStorage = JSON.parse(localStorage.user)

        //на этой переменной (массив) запускаем forEach
        DataFromlocalStorage.forEach((item) => {
            //но индекс массива у нас только [0]........

            //создаём html теги
            let tr = document.createElement(`tr`),
                tdName = document.createElement(`td`),
                tdLastName = document.createElement(`td`),
                tdAge = document.createElement(`td`),
                tdTel = document.createElement(`td`),
                tdIndex = document.createElement(`td`),
                tdCheck = document.createElement(`td`),
                checkbox = document.createElement(`input`);

            checkbox.type = `checkbox`;

            // записываем значения в переменные(теги)
            checkbox.checked = item.status;
            tdName.innerText = item.name;
            tdLastName.innerText = item.lastName;
            tdAge.innerText = item.age;
            tdTel.innerText = item.tel;
            tdIndex.innerText = item.index;

            //помещаем checkbox в ячейку
            tdCheck.append(checkbox);
            //помещаем ячейки в строку tr
            tr.append(tdName, tdLastName, tdAge, tdIndex, tdTel, tdCheck);
            //ищем tbody и сразу помещаем в него строку tr
            document.querySelector(`tbody`).append(tr)
        })
    }
})