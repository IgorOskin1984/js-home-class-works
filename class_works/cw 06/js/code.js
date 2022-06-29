"use script";
function Calculator() {
    //let a = 0,
    //    b = 0;
    this.read = function () {
        this.a = Math.floor(prompt("Give me a Number"));
        this.b = Math.floor(prompt("Give me a second Number"));
        //return `${this.a} + ${this.b} = `;
        document.write(`${this.a} + ${this.b} = `);
    }
    this.sum = function () {
        //return this.a + this.b;
        document.write(this.a + this.b);
        document.write("<hr>")
    }

    this.mul = function(){
        //let rez = this.a * this.b;
        //return `${this.a} * ${this.b} = ${rez}`
        document.write(`${this.a} * ${this.b} = `)
        return  this.a * this.b;
    }
};

const exemple = new Calculator();
console.dir(exemple);

//exemple.read().sum();
exemple.read();
exemple.sum();
document.write(exemple.mul()); 



//document.write(exemple.read().sum());
//document.write(exemple.sum()); 
document.write("<hr>");
console.dir(exemple);
