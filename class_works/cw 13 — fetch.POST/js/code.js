"use script";

//для метода POST

//сохраняем URL с  данными
const requestURL = `https://jsonplaceholder.typicode.com/users`;

//создаем функцию для обработки запросов
function sendRequest(method, url, body = null) {

    //создаём переменную для перевода Content-Type в application/json
    const headers = {
        'Content-Type': 'application/json'
    }

    //в метод fetch передаём  url и объект с данными в котором находится 1 - method,
    //2 - JSON.stringify(body), 3 - переменная headers
    
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    //с помощью then обрабатываем запрос
    }).then(response => {
        //если ок
        if (response.ok) {
            return response.json()
        }
        //если не ок
        else {
            return response.json().then(() => {
                const e = new Error('что-то пошло не так')
                e.data = error;
                throw e
            })
        }
    })
}
//массив, который мы отправляем с помощью POST
const body = {
    name: `Igor`,
    age: 38
}

sendRequest(`POST`, requestURL, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));