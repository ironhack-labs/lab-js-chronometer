class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor((this.currentTime / 100) % 60);
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100); // duda si el resto de 100
  }

  computeTwoDigitNumber(value) {
    let decimals = "";
    let numString = value.toString();
    if (numString.length < 2) {
      decimals = "0" + numString;
    } else {
      decimals = numString;
    }
    return decimals;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiSec = this.computeTwoDigitNumber(
      Math.floor(this.getCentiseconds())
    );

    return `${minutes}:${seconds}.${centiSec}`;
  }
}
