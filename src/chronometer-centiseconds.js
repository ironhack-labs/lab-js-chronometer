class Chronometer {
  constructor() {
    this.currentTime = 0;

    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000)
    return minutes
  }

  getSeconds() {
    const seconds = Math.floor((this.currentTime / 100) % 60)
    return seconds
  }
  getCentiseconds() {
    return Math.floor(this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  stop() {
    clearInterval(this.intervalId);
    //clearInterval para el intervalo
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds())

    return `${minutes}:${seconds}.${centiSeconds}`;
  }
}
