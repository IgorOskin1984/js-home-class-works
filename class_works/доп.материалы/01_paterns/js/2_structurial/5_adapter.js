class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2;
            case 'sub': return t1 - t2;
            default: return NaN
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operation(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2);
            case 'sub': return this.calc.sub(t1, t2);
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log('старый калькулятор');
console.log(oldCalc.operations(10, 5, 'add'));

const newCalc = new NewCalc();
console.log('новый калькулятор');
console.log(newCalc.add(10,5));

const adapter = new CalcAdapter();
console.log('адаптер');
console.log(adapter.operation(10,5, 'add'));

//суть: совмещение старого и нового кода в один (например при обновлении)