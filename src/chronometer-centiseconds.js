class Chronometer {
    constructor() {
        this.currentTime = 0
        this.intervalId = null
        // ... your code goes here

    }

    start(printTimeCallback) {
        const intervalId = setInterval(() => {
            this.currentTime += 1;
            if (printTimeCallback) {
                printTimeCallback()
            }
            // ... your code goes here
        }, 10) //! change to 100
        // ... your code goes here
    }


    getMinutes() {
        return Math.floor(this.currentTime / 6000)
        // ... your code goes here
    }

    getSeconds() {
        return Math.floor(this.currentTime / 100 % 60)
        // ... your code goes here
    }

    getCentiseconds() {
        return Math.floor(this.currentTime % 100)
        // ... your code goes here
    }

    computeTwoDigitNumber(value) {
        return value.toLocaleString(undefined, { minimumIntegerDigits: 2 })

        // ... your code goes here
    }

    stop() {
        return clearInterval(this.currentTime)
        // ... your code goes here
    }

    reset() {
        return this.currentTime = 0
        // ... your code goes here
    }

    split() {
        return (this.computeTwoDigitNumber(this.getMinutes())).toString() + ":" + (this.computeTwoDigitNumber(this.getSeconds())).toString() + "." + (this.computeTwoDigitNumber(this.getCentiseconds())).toString();

        // ... your code goes here
    }
}
