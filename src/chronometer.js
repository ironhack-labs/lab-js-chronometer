class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    const seconds = Math.floor(this.currentTime) % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const valueDisplay = ("0" + value).slice(-2);
    return valueDisplay;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const formattedTime = `${this.computeTwoDigitNumber(
      minutes
    )}:${this.computeTwoDigitNumber(seconds)}`;
    return formattedTime;
  }
}
