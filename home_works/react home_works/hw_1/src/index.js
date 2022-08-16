import React from "react";
import ReactDOM from "react-dom";

import oven from '../src/1_oven.webp'
import telets from "../src/img/02_telets.webp";
import bliznets from '../src/img/03_bliznetsi.webp';
import rak from '../src/img/04_rak.webp';
import leon from '../src/img/05_lev.webp';


const App = function name(params) {
    return (
        <div>
            <TitleMonth></TitleMonth>
            <ul>
                <li>Sunday</li>
                <li>Munday</li>
                <li>Tuthday</li>
                <li>Wednethday</li>
                <li>Thirthday</li>
                <li>Friday</li>
                <li>Setaday</li>
            </ul>
            <TitleYear></TitleYear>
            <YearBody></YearBody>
            <ZodiaksTitle></ZodiaksTitle>
            <ZodiaksImgs></ZodiaksImgs>


        </div>

    )
}

const TitleMonth = function () {
    return (
        <h2>The week</h2>
    )
}

const TitleYear = function () {
    return (
        <h2>Year</h2>
    )
}

const YearBody = function () {
    return (
        <div>
            <span>Январь</span>,
            <span> Вевраль</span>,
            <span> Март</span>,
            <span> Апель</span>,
            <span> Май</span>,
            <span> Июнь</span>,
            <span> Июль</span>,
            <span> Август</span>,
            <span> Сентябрь</span>,
            <span> Октябрь</span>,
            <span> Ноябрь</span>,
            <span> Декабрь</span>.
        </div>
    )
}

const ZodiaksTitle = function () {
    return (
        <h2>Zodiaks</h2>
    )
}

const ZodiaksImgs = function () {
    return (
        <div>
            <p>Oven</p>
            <img src={oven}></img>
            <p>Телец</p>
            <img src={telets} alt="logo"></img>
            <p>Bliznets</p>
            <img src={bliznets}></img>
            <p>Rak</p>
            <img src={rak}></img>
            <p>Leon</p>
            <img src={leon}></img>
        </div>
    )
}



ReactDOM.render(<App></App>, document.querySelector('#root'))