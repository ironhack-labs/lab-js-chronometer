class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
   
    const intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
    this.intervalId = intervalId
  }

  getMinutes() {
   return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) return value.toString();
    if (value < 10) return "0" + value.toString();
    if (value == 0) return value.toString() + "0";
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
   
  }
}
