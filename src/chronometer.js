class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = null;
    }

    start(printTimeCallback) {
        this.intervalId = setInterval(() => {
            if (typeof printTimeCallback === "function") {
                printTimeCallback();
            }
            this.currentTime += 1;
        }, 1000);
    }

    getMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    getSeconds() {
        return this.currentTime % 60;
    }

    computeTwoDigitNumber(value) {
        return value.toString().padStart(2, "0");
    }

    stop() {
        return clearInterval(this.intervalId);
    }

    reset() {
        return (this.currentTime = 0);
    }

    split() {
        const minutes = this.computeTwoDigitNumber(this.getMinutes());
        const seconds = this.computeTwoDigitNumber(this.getSeconds());
        return `${minutes}:${seconds}`;
    }
}
