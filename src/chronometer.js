class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback();
    }, 1000);
  }

 
  getMinutes() {
    let numberOfMinutes = this.currentTime / 60;
    let entireMinutes = Math.floor(numberOfMinutes);
    return entireMinutes;
  }

  getSeconds() {
    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      let lessThanTen = ("0" + value).slice(-2);
      let lessThanTenToString = lessThanTen.toString();
      return lessThanTenToString;
    } else {
      let valueToString = value.toString();
      return valueToString;
    } 

  }

  stop() {
    clearInterval(this.currentTime);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
