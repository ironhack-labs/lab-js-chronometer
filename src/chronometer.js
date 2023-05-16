class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      if (printTimeCallback) {
        printTimeCallback();
      }
      // this.start(printTimeCallback);
    }, 1000);
  }

  getMinutes() {
    const mins = Math.floor(this.currentTime / 60);

    if (this.intervalId >= 0) {
      return mins;
    }
  }

  getSeconds() {
    if (this.intervalId >= 0) {
      return this.currentTime % 60;
    } else {
      return 0;
    }

    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  }

  stop() {
    clearInterval(this.intervalId);

    setTimeout;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let cleanMins = this.computeTwoDigitNumber(this.getMinutes());
    let cleanSecs = this.computeTwoDigitNumber(this.getSeconds());

    return `${cleanMins}:${cleanSecs}`;
  }
}
