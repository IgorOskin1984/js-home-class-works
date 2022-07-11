"use strict";
let sliderConteiner = document.querySelector(".slider-conteiner"),
    sliderTrack =  document.querySelector(`.slider-track`),
    items = document.querySelectorAll(`.slider-item`),
    conteinerWidth = sliderConteiner.clientWidth,
    len = (items.length) * conteinerWidth,

    leftPos = 0;



window.onload = ()=> {
    setInterval(animate, 1);
}

const animate = () => {
    sliderTrack.style.left = leftPos + "px";
    leftPos--;
    if(leftPos === -len){
        leftPos = 400
    }
}