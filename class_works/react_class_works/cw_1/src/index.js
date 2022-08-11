import React from "react";
import ReactDOM from "react-dom";

//1 вар
//ReactDOM.render("Hello world", document.querySelector('#root'))

//2вар
//let text = React.createElement("div", null, "Hello react")
//ReactDOM.render(text2, document.querySelector('#root'))

//3вар
//let text2 = <div>Hello react world</div>
//ReactDOM.render(text2, document.querySelector('#root'))

//4вар
//const App = function () {
//    return <h1>Hello simple 4</h1>
//}
//ReactDOM.render(<App></App>, document.querySelector('#root'))

//основной способ
const App = function name(params) {
    return (
        <div>
            <Title></Title>
            <ul>
                <li>Sunday</li>
                <li>Munday</li>
                <li>Tuthday</li>
                <li>Wednethday</li>
                <li>Thirthday</li>
                <li>Friday</li>
                <li>Setaday</li>
            </ul>
        </div>

    )
}

const Title = function () {
    return (
        <h2>The week</h2>
    )
}

ReactDOM.render(<App></App>, document.querySelector('#root'))