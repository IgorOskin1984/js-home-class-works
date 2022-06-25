"use script";
const wallet = {
    userName: "Igor",
    bitcoin: {
        name: "Bitcoin",
        logo: "<img src = https://s2.coinmarketcap.com/static/img/coins/64x64/1.png>",
        cost: "30245.99",
        coin: 11
    },
    ethereum: {
        name: "Ethereum",
        logo: "<img src = https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png>",
        cost: "1126.31",
        coin: 22
    },
    stellar: {
        name: "Stellar",
        logo: "<img src = https://s2.coinmarketcap.com/static/img/coins/64x64/512.png>",
        cost: "0.1152",
        coin: 33
    },
    show: function (name) {
        document.getElementById("display").innerHTML = `Добрый день ${wallet.userName} <hr> 
        на Вашем ${wallet[name].name} балансе ${wallet[name].coin} монет <hr>
        стоимостью ${(wallet[name].coin * wallet[name].cost * 31).toFixed(2)} грн`
    }
}
wallet.show(prompt("enter coin name:", "bitcoin, ethereum or stellar"))
