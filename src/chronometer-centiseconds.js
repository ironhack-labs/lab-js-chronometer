class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (printTimeCallback === undefined) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 10); //update every milisecond --> 1 sec = 1000ms; 0.01 sec = 10ms
    }
    else {
      this.intervalId = setInterval(() => {
        printTimeCallback()
      }, 10);
    }
  }

  getMinutes() { // 2 min = 12000 centisec, 1 sec = 100 centisec
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() { //12000centisec / 100 = 120sec;
    return Math.floor(this.currentTime / 100 % 60)
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100)
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
            + "."
            + this.computeTwoDigitNumber(this.getCentiseconds())
  }
}