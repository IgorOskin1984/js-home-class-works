"use strict";
//создаём массив
let array = ["firstName", "lastName", 2022, "Ukraine", null, [1, 2, 3, 4], { name: "user" }];

//фильтруем старый массив с помощью typeof и возвращаем только нужный тип данных 
function filterBy(arr, type) {
    return arr.filter((item) => typeof item !== type)
}

//вызываем фунуцию и выводим данные
console.log(filterBy(array, "string").join(", "));