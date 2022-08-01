"use script";

//для метода GET

//сохраняем URL с  данными
const requestURL = `https://jsonplaceholder.typicode.com/users`;

//создаем функцию для обработки запросов
function sendRequest(method, url, body = null) {
    //принимаем ответ с помощью fetch и обрабатываем с помощью then
    return fetch(url).then(response => {
        //если ок - получаем ответ
        if (response.ok) {
            return response.json()
        }
        //если не ок - создаём и выбрасываем ошибку
        else {
            return response.json().then(() => {
                const e = new Error('что-то пошло не так')
                e.data = error;
                throw e
            })
        }
    })
}

sendRequest(`GET`, requestURL)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));