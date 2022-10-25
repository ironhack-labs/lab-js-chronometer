class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback === undefined) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }
    else {
      this.intervalId = setInterval(() => {
        printTimeCallback()
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60) 
  }

  computeTwoDigitNumber(value) {
    const str = String(value)
    return str.length === 2 ? str 
                            : str.length === 1
                            ? "0" + str
                            : "wrong input"
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) 
            + ":" 
            + this.computeTwoDigitNumber(this.getSeconds())
  }
}
