class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback() => {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback();
    }, 1000);
  })

  getMinutes() {
    var passedMinutes = Math.floor(this.currentTime/60);
    return passedMinutes;
  }

  getSeconds() {
    var passedSeconds = this.passedMinutes%60;
    return passedSeconds;
  }

  computeTwoDigitNumber(value) {
    value.toString();
    if(value.length < 2) {
      value = `0 + ${value}`;
    }
  return value;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
