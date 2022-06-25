"use strict";

const arr = [],
        userIndex = parseFloat(prompt("Enter a number from 1 to 5", "here"));
;
for( let i = 0; i < 5; i++){
    //arr[i] = i + 1;
    arr[i] = Math.floor(Math.random() * 100);
}
arr.splice(userIndex, 1);
arr.reverse();
document.write(arr.join(" &#9729 "));





//const arr = new Array(5);
//arr[0] = 'a';
//arr[1] = 'b';
//arr[2] = 'c';
//arr[3] = 'd';
//arr[4] = 'e';

//let x = arr.length;
//arr.splice(x - userIndex, 1);
