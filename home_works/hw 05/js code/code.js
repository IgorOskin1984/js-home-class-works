"use strict";

//function ifStrinf(x) {
//    homeWork[x] = prompt(`Print ${x} data, please`);
//    document.write(`${x}s data is ${ homeWork[x]}`);
//    console.log(`${x}s data is ${ homeWork[x]}`);
//    document.write("<hr>");
//}

const homeWork = {
    header: "",
    body: "",
    //footer: "",
    //date: "",
};
//создю вложенный обЪект
homeWork.aplication = new Object;
homeWork.aplication.text = "teeeeeeeeeeext";
//создаю влоэенные-вложенные объекты
homeWork.aplication.innerHeader = new Object;
homeWork.aplication.innerBody = new Object;
//homeWork.aplication.innerFooter = new Object;
//homeWork.aplication.innerDate = new Object;

homeWork.ifString = function () {
    //перебираем объект
    for (let el in homeWork) {
        //ищем строку
        if (typeof homeWork[el] == "string") {
            homeWork[el] = prompt(`Print ${el}s data, please`);
            document.write(`${el}s data is ${homeWork[el]}`);
            console.log(`${el}s data is ${homeWork[el]}`);
            document.write("<hr>");
        }
    }
}
homeWork.ifObject = function () {
    //перебираю объект, ищу вложенныый объект
    for (let el in homeWork) {
        if (typeof homeWork[el] == "object") {
            //перебираю вложенныый объект
            for (let el2 in homeWork[el]) {
                //если строка - заполняю значение
                if (typeof homeWork[el][el2] == "string") {
                    homeWork[el][el2] = prompt("if string data");
                    console.log(el2);
                    console.log(homeWork[el][el2]);
                    document.write(`${el}.${el2} = ${homeWork[el][el2]}`)
                    document.write("<hr>");
                }

                //если объект - захожу внутрь и начинаю присваивать переменные для вложенных объектов
                else if (typeof homeWork[el][el2] == "object"){
                    //спрашиваю хочент ли пользователь создать переменную
                    let ask = confirm("Do you want to create another property?");
                    while(ask == true ){
                        //имя переменной объекта
                        let x = prompt("New object items name is: "),
                        //значение перменной объекта
                        y = prompt("The value of the new object items is... ");
                        
                        homeWork[el][el2][x] = `${y}`
                        console.log(`homeWork[el][el2][x] = homeWork.${el}.${el2}.${x} = ${homeWork[el][el2][x]}`)
                        document.write(`${el}.${el2}.${x} = ${homeWork[el][el2][x]}`);
                        document.write("<hr>");
                        //еще раз спрашиваю у юзера хочет ли он создать переменную для того что бы выйти или остаться в цикле
                        ask = confirm("Do you want to create another property?");

                    }
                    
                }
            }
        }
    }
}


//homeWork.ifString();
homeWork.ifObject();
