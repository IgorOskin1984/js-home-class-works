"use strict";

let arr1 = [],
    arr2 = [],
    arr3 = [];
function arrData(array){
    for (let i = 0; i < 5; i++){
        array[i] = Math.floor(Math.random() * 100);
    }
    return array;
}
let newArray = (array) =>{
    let newArr = [];
        for (let i = 0; i < array.length; i++){
            newArr[i] = array[i] * 10;
        }
        return newArr;
    }
    
let map = (array, fn) =>{
    arrData(array);
    document.write("Old array is ", array + "<hr>")
    document.write("New array is ", fn(array) + "<hr>");
}

map(arr1, newArray);
map(arr2, newArray);
map(arr3, newArray);

