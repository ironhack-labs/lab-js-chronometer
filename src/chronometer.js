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
    const minute = Math.floor(this.currentTime / 60);
    return minute;
  }

  getSeconds() {
    const remainingSeconds = Math.floor(this.currentTime % 60);
    return remainingSeconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10 && value >= 0) {
      return "0" + value;
    } else {
      return "" + value;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes());
    const currentSeconds = this.computeTwoDigitNumber(this.getSeconds());

    const formattedTime = `${currentMinutes}:${currentSeconds}`;
    return formattedTime;
  }
}
