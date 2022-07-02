"use strict";
//делаем конструктор
function NewUser(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//добавляем новую функцию на прототип
NewUser.prototype.getLogin = function () {
    return `${this.firstName[0]}${this.lastName}`.toLocaleLowerCase();
}

//добавляем новое свойство birthday на прототип
NewUser.prototype.birthday = new Date();

//создаем фун, которая даёт birthday новое значение
NewUser.prototype.birthdayDate = function (x) {
    return NewUser.prototype.birthday = x;
}

//создаем фун, которая вычисляет возраст пользователя
NewUser.prototype.age = function () {
    let carrentDate = new Date,
        carrentYear = carrentDate.getFullYear()
    return carrentYear - this.birthday.getFullYear()
}

//создаем фун getPassword
NewUser.prototype.getPassword = function () {
    return `${this.firstName[0].toUpperCase()}${this.lastName.toLocaleLowerCase()}${this.birthday.getFullYear()}`
}

//coздаем нового пользователя
let user_1 = new NewUser(prompt("user First name"), prompt("user Last name"));

//спрашиаем у пользователя дату рождения
user_1.birthdayDate(new Date(prompt("Please enter date.", NewUser.prototype.birthday.getDate() + "." + NewUser.prototype.birthday.getMonth() + "." + NewUser.prototype.birthday.getFullYear())));

//выводим данные
console.log(user_1.getLogin());
console.log(user_1.age());
console.log(user_1.getPassword())