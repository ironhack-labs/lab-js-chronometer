class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    const callBackInterval = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
    this.intervalId = callBackInterval;
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    value = "0" + value;
    const twoDigits = value.slice(-2);
    return twoDigits;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const storedMinutes = this.getMinutes();
    const storedSeconds = this.getSeconds();

    const formattedTime =
      this.computeTwoDigitNumber(storedMinutes) +
      ":" +
      this.computeTwoDigitNumber(storedSeconds);
    return formattedTime;
  }
}
