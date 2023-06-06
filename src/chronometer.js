class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      console.log(this.currentTime);
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (typeof value !== "number") {
      return null;
    }

    if (value === 0) {
      return "00";
    }

    if (value < 10 && value > 0) {
      return "0" + String(value);
    }

    return String(value);
  }

  stop() {
    console.log("STOP");

    return clearInterval(this.intervalId);
  }

  reset() {
    console.log("RESET");
    return (this.currentTime = 0);
  }

  split() {
    let currentMins = this.computeTwoDigitNumber(this.getMinutes());
    let currentSecs = this.computeTwoDigitNumber(this.getSeconds());

    return `${currentMins}:${currentSecs}`;
  }
}
