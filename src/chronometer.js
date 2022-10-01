class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalID = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    else {
      return (this.currentTime % 60)
    }
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length < 2) {
      return `0${value.toString()}`;
    }

    return value.toString();
  }

  stop() {
    clearInterval();
    setTimeout(() => {
      clearInterval(this.intervalID);
    });
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
