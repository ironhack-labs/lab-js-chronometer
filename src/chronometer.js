class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (typeof printTimeCallback === "function") {
        printTimeCallback(this.currentTime);
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
    const string = String(value);
    if (string.length === 1) {
      return '0' + string;
    }
    return string;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    const formattedTimestamp = `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;

    return formattedTimestamp;
  }
}
