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
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    const stringValue = String(value);
    if (stringValue.length === 1) {
      return "0" + stringValue;
    }
    return stringValue;
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

    const formattedMinutes = this.computeTwoDigitNumber(minutes);
    const formattedSeconds = this.computeTwoDigitNumber(seconds);

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

