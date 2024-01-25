class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    printTime();
  }

  start(printTimeCallback) {
    this.intervalId = intervalFunc;
    const intervalFunc = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {printTime()};
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let string = value.toString();

    if (string.length === 1) {
      string = `0${value.toString()}`;
      return string;
    } else {
      return string;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());

    return `${minutes}:${seconds}`;
  }
}
