class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.currentCentiseconds = 0;
        this.intervalId = null;
    }

    start(printTimeCallback) {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            this.currentCentiseconds += 1;

            // Always update display every 10ms


            if (this.currentCentiseconds === 100) {
                this.currentCentiseconds = 0;
                this.currentTime++;

                if (typeof printTimeCallback === "function") {
                    printTimeCallback(); // Update display
                }
            }
        }, 10);
    }


    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        return this.currentTime % 60;
    }

    getCentiseconds() {
        return this.currentCentiseconds;
    }

    computeTwoDigitNumber(value) {
        return `0${value}`.slice(-2);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.currentTime = 0;
        this.currentCentiseconds = 0;
    }

    split() {
        return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    }
}
