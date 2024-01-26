class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
    this.currentTime++;
      if (printTimeCallback) {printTimeCallback()};
    },100)
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime / 10) / 60);
  }

  getSeconds() {
    // ... your code goes here
    return ((this.currentTime / 10) % 60);
  }

  getCentiseconds() {
    // ... your code goes here
    const str = this.currentTime.toString()
    num = Number(str);
    return num;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = value.toString();

    if (string.length === 1) {
      string = `0${value.toString()}`;
      return string;
    } else {
      return string;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}:${centiseconds}`;
  }
}
