class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
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
    const numberString = value.toString();

    if (numberString.length == 1) {
      return "0" + numberString;
    } else {
      return numberString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const numberMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const numberSeconds = this.computeTwoDigitNumber(this.getSeconds());
    

    return `${numberMinutes}:${numberSeconds}`;
  }
}
