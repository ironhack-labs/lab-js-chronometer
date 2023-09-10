class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      if (printTimeCallback !== undefined) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor((this.currentTime % 6000) / 100);
  }

  getCentiseconds() {
    return (
      this.currentTime - (this.getMinutes() * 6000 + this.getSeconds() * 100)
    );
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
    const min = this.computeTwoDigitNumber(this.getMinutes());

    const second = this.computeTwoDigitNumber(this.getSeconds());

    const centiSecond = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${min}:${second}.${centiSecond}`;
  }
}
