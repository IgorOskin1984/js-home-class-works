const car = {
    weels: 4,
    init() {
        return `У меня есть ${this.weels} колеса, мой владелец ${this.owner}`
    }
}

const car2 = {
    color: `red`,
    init() {
        return `У меня есть ${this.color} колеса, мой владелец ${this.owner}`
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: `Dmitro`
    }
})

//const carWithOwner = Object.create(car2, {
//    owner: {
//        value: `Dmitro`
//    }
//})

console.log(carWithOwner.init());

console.log(carWithOwner);

//сравнение прототипов двух разных объектов
console.log(carWithOwner.__proto__ === car);


console.log(carWithOwner.__proto__ === car2);

//суть: можно создавать новые объекты используя другие объекты. При этом новые объекты могут пользоваться данными своих прототипов (объектов, на основе которых они были созданы)
