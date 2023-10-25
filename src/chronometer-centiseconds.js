class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        return printTimeCallback();
      }
    }, 10);

    return this.intervalId;
  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime / 6000);

    if (this.currentTime === 0) {
      numberOfMinutes = 0;
    }

    return numberOfMinutes;
  }

  getSeconds() {
    let numberOfSeconds = Math.floor(this.currentTime / 100) % 60;
    return numberOfSeconds;
  }

  getCentiseconds() {
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, 0);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minToString = this.computeTwoDigitNumber(this.getMinutes());
    let secondsToString = this.computeTwoDigitNumber(this.getSeconds());
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minToString}:${secondsToString}.${centiSeconds}`;
  }
}
