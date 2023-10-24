class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback !== undefined) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    if (this.currentTime >= 6000) {
      return Math.floor((this.currentTime / 6000));
    }
    else {
      return 0;
    }
  }

  getSeconds() {
    const minutesInCentiseconds = this.getMinutes() * 6000;
    const remainingCentis = this.currentTime - minutesInCentiseconds;

    return Math.floor(remainingCentis / 100);
  }

  getCentiseconds() {
    const cent = Math.floor(this.currentTime % 100);
    return cent;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`;
    }
    else {
      return value.toString();
    };
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
