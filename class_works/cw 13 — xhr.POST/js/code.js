"use script";
const requestURL = `https://jsonplaceholder.typicode.com/users`;

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        //ответ сервера приходит в виде string
        //что бы сделать объект надо применить метод parse, что мы и делаем ниже через .responseType = `json` или JSON.parse

        xhr.responseType = `json`;

        xhr.addEventListener(`load`, () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            }
            else {
                resolve(xhr.response);
            }
        })

        xhr.addEventListener(`error`, () => {
            reject(xhr.response);
        })

        xhr.send();
    });
}

sendRequest(`GET`, requestURL)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));