class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // this.printTimeCallback = printTimeCallback;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
        // this.currentTime++;
        if (printTimeCallback) {
            printTimeCallback(this.currentTime);
        }
        this.currentTime += 1;
      }, 1000);{
      }

  }

  getMinutes() {
    let minutGet = Math.floor(this.currentTime / 60);
    return minutGet;
  }

  getSeconds() {
    let secondGet = Math.floor(this.currentTime % 60);
    return secondGet;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return ("0" + value);
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
