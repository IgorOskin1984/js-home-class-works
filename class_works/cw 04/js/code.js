"use script"
let addition = (a, b) => {
    return  a + b;
}
let subtraction = (a, b) => {
    return  a - b;
}
let multiplication = (a, b) => {
    return rez = a * b;
}
let division = (a, b) => {
    if( b === 0) {
        console.error("error");
        return;
    }
    return rez = a / b;
}

function docWrite(rez) {
    document.getElementById("display").innerHTML = rez;
}
function culc(num1, num2, callback) {
    docWrite(callback(num1, num2));
}

let x = parseFloat(prompt('value 1')),
    y = parseFloat(prompt('value 2')),
    sign = prompt('sign');

switch (sign) {
    case '+': culc(x, y, addition);
        break;
    case '-': culc(x, y,subtraction);
        break;
    case '*': culc(x, y,multiplication);
        break;
    case '/': culc(x, y,division);
        break;
}