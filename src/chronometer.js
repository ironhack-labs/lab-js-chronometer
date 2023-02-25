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
    }, 1000);
  }

  // should return the number of entire minutes passed
  getMinutes() {
    const currentTimeMinutes = Math.floor(
      this.currentTime / 60
    );
    return currentTimeMinutes;
  }

  // should return the number of entire seconds passed
  getSeconds() {
    const currentTimeSeconds =
      this.currentTime % 60;
    console.log(currentTimeSeconds);
    return currentTimeSeconds;
  }

  // should return a string
  // should always return a string of length 2
  computeTwoDigitNumber(value) {
    let num = value.toString();
    if (value < 10) {
      return `0` + num;
    } else {
      return num;
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(
      this.getMinutes()
    );
    let sec = this.computeTwoDigitNumber(
      this.getSeconds()
    );
    return min + `:` + sec;
  }
}
