"use script";
const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`;
const request = new XMLHttpRequest();

request.open(`GET`, url);
request.send();

request.addEventListener(`readystatechange`, () => {
    if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
        makeTable(JSON.parse(request.responseText))
    }
})

function makeTable(arr){
    arr.forEach((item) => {
        console.log(item);
        const {txt, rate} = item
        let tr = document.createElement(`tr`),
            tdTxt = document.createElement(`td`),
            tdRate = document.createElement(`td`);

        tdTxt.innerText = txt;
        tdRate.innerText = rate;
        tr.append(tdTxt, tdRate);
        document.querySelector(`tbody`).append(tr);

    })
}
//=======================================================


//let url = `https://swapi.dev/api/planets`;
////создаем запрос на сервер с помощбю fetch
//const data = fetch(url, {method:`get`});
////работа с запросом. обробатываем как promice
//let data1 = data.then((res) =>  res.json() , (error) => console.error(error))

//data1.then((x) => {
//    console.log(x);
//})



//const url = `https://swapi.dev/api/planets/`

////создаем запрос на сервер с помощбю fetch
//const data = fetch(url, {method: `get`});

////работа с запросом. обробатываем как promice
//const data1 = data.then((promice) => promice.json(), (error) => console.error(error))

//data1.then((x) => {
//    document.write(x.results[0].name)
//    console.log(x);
//})
