class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === 'function') {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 6000 / 100);
    return seconds;
  }

  getCentiseconds() {
    let centiseconds = (Math.floor(this.currentTime) % 6000) % 100;
    return centiseconds;
  }

  computeTwoDigitNumber(value) {
    let valueAsString = value.toString();
    if (valueAsString.length > 1) {
      return valueAsString;
    } else {
      return `0${valueAsString}`;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let centiseconds = this.getCentiseconds();
    let formatted = `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}.${this.computeTwoDigitNumber(centiseconds)}`;
    return formatted;
  }
}
