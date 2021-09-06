class GuessingGame {
    constructor() {
        this.arr = [];
        this.max = 0;
        this.min = 0;
        this.middle = 0;
    }

    setRange(min, max) {
        for (var i = min; i <= max; i++) {
            this.arr.push(i);
        }
        this.max = this.arr.length - 1;
    }

    guess() {
        this.middle = Math.ceil((this.min + this.max) / 2);
        return this.arr[this.middle];
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;
