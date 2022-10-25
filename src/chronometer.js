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
        }, 1000)
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60)
        // ... your code goes here
    }

    getSeconds() {
        return Math.floor(this.currentTime % 60)
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
        return  (this.computeTwoDigitNumber(this.getMinutes())).toString()+ ":" +(this.computeTwoDigitNumber(this.getSeconds())).toString();
        
    }
}
