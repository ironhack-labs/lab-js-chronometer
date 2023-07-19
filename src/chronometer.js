class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)

  }

  getMinutes() {

    return (Math.floor(this.currentTime / 60))
  }

  getSeconds() {
    return (Math.floor(this.currentTime) % 60)
  }

  computeTwoDigitNumber(value) {
    value = Math.max(0, Math.min(value, 99))
    const result = value.toString().padStart(2, '0');
    return result;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;
  }
}
