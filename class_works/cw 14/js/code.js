"use script";

//Создайте функцию user, сделайте так чтобы функция выводила в консоль контекст

//Создайте обьект userOne, добавьте к нему свойства имя, фамилия, возраст и функцию, которая будет выводить  Привет! Я имя + фамилия  Выведите имя и фамилию пользователя с объекта userOne.

//Сделайте так, чтобы контекст в методе объекта userOne был глобальный объект window.

//Создайте еще один объект userTwo и заполните его теми же свойствами, но без метода.

//Выведите информацию с объекта userTwo используя метод объекта userOne.

//Работа с контекстом(bind call apply) bind call apply



//Создайте метод который будет умножать элементы массива на то число которое будет передавать пользователь. Сделайте так, чтобы метод наследовался каждым массивом подобно методу pop().

//Создайте объект пользователь и задайте ему имя. 
//Сделайте так чтобы данное свойство нельзя было удалить.

//Создайте объект пользователь запиите в объект имя и фалиоию. 
//Добавьте геттер который выведит информацию о пользоваетле


//======================================
const userFun = () => {
    console.log(this);
}
userFun()
//=======================================

const userOne = {
    userFirstName: 'Igor',
    userLastName: 'Oskin',
    userAge: '38',
    userDataShow(phoneNumber = 'Error') {
        // console.log не пишется в середине функции, надо писать return
        return `Hello! I am ${this.userFirstName} ${this.userLastName} ${phoneNumber}`
    }
}

console.log(userOne.userDataShow());



//===================================
//меняем имя
userOne.userFirstName = 'Zoran';
userOne.userLastName = 'Pavlovich'

console.log(userOne.userDataShow());
//=====================================
//метод defineProperty делает свойство неизменяемым/ невидемым для циклов for и др/ неудаляемой 
Object.defineProperty(userOne, 'userFirstName', { writable: false, enumerable: false, configurable: false });
userOne.userFirstName = 'Aslkjdhf';
userOne.userLastName = 'ksjdfhslkhdf'

console.log(userOne.userDataShow());


//==========================================
//методы bind/apply/call с их посощью можно вызывать функцию из одного объекта на другом
//console.log(userOne.userDataShow());
console.log(userOne.userDataShow.bind(window));

const x = userOne.userDataShow.bind(window)
console.log(x());

console.log(userOne.userDataShow.bind(window)());

const userTwo = {
    userFirstName: 'Dimon',
    userLastName: 'Tkachenko'
}
console.log(userOne.userDataShow.bind(userTwo, '+38 099 876 54 32')());

console.log(userOne.userDataShow.apply(userTwo, ['099 987 65 43']));

console.log(userOne.userDataShow.call(userTwo, '123 123 123')); // приоритетный метод

//=====================================================
//Создайте метод который будет умножать элементы массива на то число которое будет передавать пользователь. Сделайте так, чтобы метод наследовался каждым массивом подобно методу pop().

const multiply = (x, arr) => arr.map((item) => item * x)


console.log(multiply(2, [1, 2, 3, 4, 5]));
//записываем функцию multiply на прототип

Array.prototype.multiply2 = function (x) {
    return this.map((item) => item * x)
}

console.log([1, 2, 3].multiply2(2));
