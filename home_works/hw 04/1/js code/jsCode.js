"use strict";
//let array = [1, 2, 3, 4, 5],
//    arr2 = [23,32,34,34,34,];

//function fn(arr) {
//    let mass = [];

//    for (let i = 0; i < arr.length; i++) {
//        mass[i] = arr[i] * 10;
//    }

//    return mass;
//};

//const map = (array, callback) => {
//    document.write(`array: ${array} <br>` + "<hr>");
//    document.write(`changed array: ${callback(array)} <hr>`);
//};
//map(arr2, fn);

//document.write("<hr>");
let arr1 = [],
    arr2 = [],
    arr3 = [];
    //newArr = [];
function arrData(arr1){
    for (let i = 0; i < 5; i++){
        arr1[i] = Math.floor(Math.random() * 100);
    }
    //document.write(arr1 + "<hr>");
    return arr1;
}
let newArray = (arrData) =>{
    let newArr = [];
    for (let i = 0; i < arr1.length; i++){
        newArr[i] = arr1[i] * 10;
    }
    //document.write(newArr + "<hr>");
    return newArr;
}
let map = ([], fn) =>{
    document.write("Old array is ", arr1 + "<hr>")
    document.write("New array is ", fn + "<hr>");
}

arrData(arr1);
newArray(arr1);
map(arr1, newArray);
