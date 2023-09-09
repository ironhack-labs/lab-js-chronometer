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

  getMinutes() {

    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    let passedMinutes = this.getMinutes() * 60;
    return this.currentTime - passedMinutes;
  }

  computeTwoDigitNumber(value) {
    //console.log(typeof (value))
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes())
    // console.log("calculated minutes", minute)
    let second = this.computeTwoDigitNumber(this.getSeconds())
    // console.log("calculated seconds", second)

    return `${minute}:${second}`;
  }
}
