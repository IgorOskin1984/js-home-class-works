"use script";
//сохраняем URL в переменную requestURL 
const requestURL = `https://swapi.dev/api/people/`;

//с помощью fetch отправляем запрос и сохраняем его в dataRequest
const dataRequest = fetch(requestURL, { method: 'get' })

    //на dataRequest вызываем then чтобы с помощью json преобразовать ответ из стринг в массив. Если будет ошибка - выкидываем в консоль
    .then((promise) => promise.json(), (error) => console.error(error))

    //далее еще раз надо вызвать then и передать туда полученные данные
    .then((data) => {

        //используя полученные данные вызываем фунуцию cardBuild для вывода данных на страницу
        cardBuild(data.results)
    })

//получаем массив data.results в функцию cardBuild 
function cardBuild(data) {
    //перебираем массив
    data.forEach((item) => {
        //создаём, заполняем и выводим нужные элементы
        let div = document.createElement(`div`);

        let name = document.createElement(`p`);
        name.innerText = 'name: ' + item.name;

        let bYear = document.createElement(`p`);
        bYear.innerText = `birth_year: ${item.birth_year}`

        let height = document.createElement(`p`);
        height.innerText = `height: ${item.height}`;

        div.append(name, bYear, height);
        div.className = 'card'

        document.querySelector(`body`).append(div)

    })





}


