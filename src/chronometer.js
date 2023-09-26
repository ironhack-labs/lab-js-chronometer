class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(typeof printTimeCallback);
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0;
    }
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    const toString = value.toString();
    const twoDigits = ("0" + toString).slice(-2);
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minuti = this.computeTwoDigitNumber(this.getMinutes());
    const secondi = this.computeTwoDigitNumber(this.getSeconds());
    return `${minuti}:${secondi}`;
  }
}
