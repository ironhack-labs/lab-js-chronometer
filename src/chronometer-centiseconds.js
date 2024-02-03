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
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 100 / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return this.currentTime % 100;
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
    const numberCentiseconds = this.computeTwoDigitNumber(
      this.getCentiseconds()
    );

    return `${numberMinutes}:${numberSeconds}.${numberCentiseconds}`;
  }
}
