class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    const intervalId = setInterval(() => {
      printTimeCallback && printTimeCallback();
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let min = this.currentTime / 60;
    let totalMin = Math.floor(min);
    return totalMin;
  }

  getSeconds() {
    // ... your code goes here
    let sec = this.currentTime % 60;
    return sec;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) return `0${value}`;
    return `${value}`;
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

    return `${minutes}:${seconds}`;
  }
}
const app = new Chronometer();
