"use strict";
let x = parseFloat(prompt("Введите число  от 1 до 5")),
    y = parseFloat(prompt("Введите число  от 6 до 10")),
    rez = y - x,
    rez2 = rez,
    summ = 0,
    count = 1,
    odd = x;


//Проверку на ввод данных пользователем пока делать не могу.






//if (x < 1 || x > 5){
//    x = parseFloat(prompt("Введите число от 1 до 5"));
//    return 1;
//}
//else if ( y < 6 || y > 10){
//    y = parseFloat(prompt("Введите число от 6 до 10"));
//    return 1;
//}
//else{

    while (rez >=  0){
        summ += x;
        x++;
        rez--;
    }
    document.write("Сумма чисел между 'x' и 'y' " + summ + "<br/>");
//}
while(rez2 >= 0){
    if(odd % 2 == 1){
        document.write(count + "-e нечетное число между 'x' и 'y' " + odd + '<br/>')
        count++;
    }
odd++;
rez2--;

}

document.write('<br>' + '<br>');
//............................................
let message,
    login = prompt("Enter your login", 'here');
    message = login == 'Тарас' ? "Привет" : "не верный логин";
    message = login == 'Директор' ? "Здравствуйте" : "не верный логин";
    message = login == '' ? "Нет логина" : "не верный логин";
    message = login == 'here' ? "Не верный логин" : "не верный логин";
    //message = login == '' ? "Нет логина" : "не верный логин";
    document.write(message);

document.write('<br>' + '<br>');
//............................................
let a = parseFloat(prompt("number 1", "tap here")),
    b = parseFloat(prompt("number 2", "tap here")),
    sum;
//if (a == NaN){
//    document.write("first namber is " + a);
    
//}
    

sum = a + b < 40 ? 'small' : 'big';
document.write(a + '</br>');
document.write(b + '</br>');
document.write("The sum is " + sum);
document.write('<br>' + '<br>');


//............................................
document.write("11" + "<hr>");

for(let i = 0; i >= 0 && i < 10; i++){
    for (let s = 9; s - i !=0; s--){
        document.write(" ---")
    }
    for(let j = 0; j < i; j++ ){
        document.write('## ');
    }
    for(let j = 0; j <= i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}
for(let i = 1; i >= 0 && i < 10; i++){
    for (let s = 0; s < i; s++){
        document.write(" ---")
    }
    for(let j = 0; j < 9 - i; j++ ){
        document.write('## ');
    }
    for(let j = 0; j >= 0 && j < 10 - i; j++){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');

document.write('<br>');
//............................................
document.write("10" + "<hr>");

for(let i = 0; i >= 0 && i < 10; i++){
    for (let s = 9; s - i !=0; s--){
        document.write(" ---")
    }
    for(let j = 0; j <= i; j++ ){
        document.write('## ');
    }
    for(let j = 0; j < i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}


document.write('<br>');
//............................................
document.write("9" + "<hr>");

for(let i = 0; i >= 0 && i < 10; i++){
    for(let j = 0; j <= i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}
for(let k = 0; k >= 0 && k < 10; k++){
    for(let m = 0; m >= 0 && m < 10 - k; m++){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................
document.write("8" + "<hr>");

for(let i = 0; i >= 0 && i < 10; i++){
    for (let s = 9; s - i !=0; s--){
        document.write(" ---")
    }
    for(let j = 0; j <= i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}
for(let i = 0; i >= 0 && i < 10; i++){
    for (let s = 0; s < i; s++){
        document.write(" ---")
    }
    for(let j = 0; j < 10 - i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................
document.write("7" + "<hr>");

for(let i = 0; i >= 0 && i < 10; i++){
    for (let s = 0; s < i; s++){
        document.write(" ---")
    }
    for(let j = 0; j < 10 - i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................
document.write("6" + "<hr>");

for(let i = 0; i >= 0 && i < 10; i++){
    for (let s = 9; s - i !=0; s--){
        document.write(" ---")
    }
    for(let j = 0; j <= i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................
document.write("5" + "<hr>");

for(let i = 0; i >= 0 && i < 10; i++){
    for(let j = 0; j <= i; j++ ){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................
document.write("4" + "<hr>");
for(let i = 0; i >= 0 && i < 10; i++){
    for(let j = 0; j >= 0 && j < 10 - i; j++){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................

document.write("3" + "<hr>");
for(let i = 0; i >= 0 && i < 10; i++){
    for(let j = 0; j >= 0 && j < 10; j++){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................
document.write("2" + "<hr>");
for(let i = 10; i != 0; i--){
    for(let j = 10; j != 0; j--){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');
//............................................
document.write("1" + "<hr>");
for(let i = 10; i > 0; i--){
    for(let j = 10; j > 0; j--){
        document.write('## ');
    }
    document.write('<br>');
}
document.write('<br>');




