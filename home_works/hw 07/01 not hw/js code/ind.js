var txt = "";
var numbers = [4, 9, 14, 15];


//var1
for (let i = 0; i < numbers.length; i++) {
    txt = numbers[i];
    document.write(`${txt} <br>`)
}
document.getElementById("demo").innerHTML = "<hr>";

//var2
for (let i = 0; i < numbers.length; i++) {
    txt += numbers[i] + "<br>";
    document.getElementById("demo").innerHTML = txt;
}
document.write("<hr>")

//var3
for (let i = 0; i < numbers.length; i++) {
    document.getElementById("demo").innerHTML += `${numbers[i]}  <br>`;
}
document.write("<hr>")

//var4
numbers.forEach(myFunction)
document.getElementById("demo").innerHTML = txt;

function myFunction(elem, index) {
    txt += elem + "<br>"
}

//вар5
numbers.forEach(myFunction)
document.getElementById("demo").innerHTML = txt;
function myFunction(elem, index) {
    txt = txt + elem + "<br>";
}