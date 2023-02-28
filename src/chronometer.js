class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = null;
  }

  start(printTimeCallback) {
    this.invervalID = setInterval(() => {
      this.currentTime++;
      if(this.currentTime === 3) {
        clearInterval(this.invervalID);
      }
      printTimeCallback(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    } else {
      return this.currentTime % 60;
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalID);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const munites = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes} ":" ${seconds}`
  }
}
