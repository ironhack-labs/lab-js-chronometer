class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      return this.currentTime++;
      if (typeof printTimeCallback === 'function'){
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return (this.currentTime = ("0" + value).slice(-2));
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    function splitTime(printTimeCallback) {
      if (printTimeCallback === "function") {
        clearInterval(this.intervalId);
        return currentTime;
      }
      function restartTimer() {
        if (printTimeCallback === "function") {
          start();
        }
      }
    }
  }
}
