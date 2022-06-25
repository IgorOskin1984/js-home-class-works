"use strict";
const styles = ["Jass", "Bluss", "music",],
//копия массива для варианта 2
    st2 = styles.slice(0, styles.length);

document.write("Основной начальный массив - " + styles.join(" / ") + "<br/>" );
document.write("Запасной начальный массив - " + st2  + "<br/>");
document.write('<hr>');
//..........................................
styles.push("Rock-n-Roll");
st2.push("Rock-n-Roll");
document.write("Основной массив добавленный" + styles.join(" / ") + "<br/>" );
document.write("Запасной массив добавленный" +st2  + "<br/>");
document.write('<hr>');
//............................................
//let x;
//x = styles.length / 2;

//Удаляем средний элемент и ставим на его место класик

//variant 1
styles.splice(styles.length / 2 , 1, "Classic" );
document.write('Вариант 1 - ' + styles.join(" / ") + "<br/>" );
//variant 2
st2.splice(st2.length / 2 - 1 , 1, "Classic" );
document.write('Вариант 2 - ' + st2.join(" / ") + "<br/>" );
document.write('<hr>');
//.........................
// Удаляем и показывем первый элемент
let firstArrElmnt = styles.shift();
document.write("Удаленный первый эллемент массива - " + firstArrElmnt + "<br/>")
document.write('<hr>');
//...........................................
//Помещаем новые эллементы в массив
styles.unshift("Rap", "Raggy")
document.write("Массив после добавления 2х эллементов - " + styles.join(" / ") + "<br/>" );

