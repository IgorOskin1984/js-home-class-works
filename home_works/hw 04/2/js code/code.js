"use strict";
// стрелочная функция с фигурными скобками
let chackAge1 = (age) => {
    return age > 18 ? true : confirm("Are you 18?")
}
let x = prompt("tap your age");
console.log(chackAge1(x));
document.write(chackAge1(x));
//...............................................................................................

// стрелочная функция без фигурнымых скобок
let chackAge2 = (age) => age > 18 ? true : confirm("jkbljhvljhvlhvljhvljhv");
console.log(chackAge2(prompt("your age please")));
document.write(chackAge2(prompt("your age please")));
//..............................................................................................
function chackAge3(age) {
    if (age > 18){
        document.write(age + "<hr>");
        return true;
    }
    else{
        return confirm("parents agree?")
    }
}
document.write(chackAge3(prompt(" Enter your age please")));
//.............................................................................................
let y = (age) => age > 18 || confirm("less then 18");
document.write(y(parseFloat(prompt("age please"))));

