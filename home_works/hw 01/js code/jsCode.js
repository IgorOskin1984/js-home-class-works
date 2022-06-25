
"use strict";
var
    userName = prompt('Введите Ваше имя'),
    userLastName = prompt('Введите Вашу фамилию'),
    age = parseInt(prompt('Ваш возраст')),
    num1 = parseInt(prompt("Введите 1e число")),
    num2 = parseInt(prompt("Введите 2e число")),
    num3 = parseInt(prompt("Введите 3e число")),
    midleAmount = (num1 + num2 + num3) / 3,
    x = 6,
    y = 14,
    z = 4;



document.write("<header> Header</header>");

document.write('<main>');
    document.write('<div class="main__flex-box">');
        document.write('<nav>navigation</nav>');

        document.write('<section>');
        //...................................
            document.write('<div class="section">');

            document.write("Имя пользователя - " +  userName +          '<br>');
            document.write("Фамилия пользователя - "    +         userLastName + '<br>');
            document.write("Возраст пользователя - " +  age +           '<br>');
            document.write("Среднее арифметическое - "  +           midleAmount);

            document.write('</div>');
        //....................................

        document.write('</section>');
    document.write('</div>');
document.write('</main>');

document.write('<footer>footer</footer>');


//.........................................
document.write(x += y - x++ * z);
document.write('<br>');
//1) x++ == 6
//2) 6 * z (4) == 24
//3) у(14) - 24 == -10
//4) х(6) + -10 == -4;
//..........................................
x = 4;
y = 5;
z = 2;
document.write(z = --x - y * 5);
document.write("<br>");
//1) --x ==3;
//2) y(5) * 5 == 25;
//3)  --x(3) - 25 == -22
//.........................................
x = 5;
y = 6;
z = 7;
document.write(y /= x + 5 % z);
document.write("<br>");
//1) 5 mod z(7) == 5;
//2) x(5) + 5 == 10;
//3) y(6) / 10 == 0.6;
//......................................
x = 6;
y = 7;
z = 8;
document.write(z - x++ + y*5);
document.write("<br>");
//1) y(7) * 5 == 35;
//2) z(8) - x++(6) == 2;
//3) 2 + 35 == 37;
//........................................
x = 7;
y = 63;
z = 9;
document.write(x = y - x++ * z);
//1) x++(7) * z(9) == 63;
//2) y(63) - 63 == 0;