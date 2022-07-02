"use strict";
let group = [],
    //i - это индек массива group
    i = 0,
    date = new Date,
    year = date.getFullYear();

//функция костуктор
function Human() {
    this.name = prompt("What is your name?", "Igor");
    //this.city = prompt("Where are you from?", "Kramatorsk");
    this.age = prompt("How old are you?", "38");
    Human.counter++
}
//считаем сколько индексов(людей) в массиве.......................
Human.counter = 0;
//создаем функцию 
Human.bornYear = (a) => {
    console.log(a)
    return year - a
}
Human.show = function(index) {
    document.write(`Dear ${group[index].name}, you was born in the year ${Human.bornYear(group[index].age)}`)
}



//создаём членнов группы........................................
let ask = confirm("Do you want to create a new group-member?")
while (ask == true) {
    group[i] = new Human;
    i++;
    ask = confirm("Do you want to create another new group-member?")
}

//сортируем массив.........................................
group.sort(function (a, b) {
    return a.age - b.age
})

//выводим данные................................................

for (let i = 0; i < group.length; i++) {
    for (let j in group[i]){
        document.write(group[i][j] + "<br>")
    }
    document.write("<hr>");
}

document.write(`Our group has ${Human.counter} members <hr>`)

Human.show(Math.floor(prompt(`Give me the group members number`, `from 1 to ${Human.counter}`)) - 1 );