class Database {
    constructor(data) {

        if(Database.exists){
            return Database.instance
        }

        Database.instance = this;
        Database.exists = true;
        this.data = data;
        
    }

    getData() {
        return this.data
    }
}

const x = new Database(`data files xxxxxxxxxxxxxx`)
const y = new Database(`NEW data files yyyyyyyyyyyyyyy`)

console.log(x.getData());
//выводятся данные переменной х
console.log(y.getData());

//суть: данный патерн нужен для баз данных. Например он может проверять наличие/статус запроса...