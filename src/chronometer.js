class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    let minutesPassed = Math.floor(this.currentTime / 60);
    return minutesPassed;
  }

  getSeconds() {
    // ... your code goes here
    let secondsPassed = this.currentTime % 60;
    return secondsPassed;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let result = '  ';
    if (value >= 0 && value < 10) {
      result = `0${value}`;
    } else {
      result = `${value}`;
    }
    return result;
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
    let result = 'mm:ss';
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    result = `${formattedMinutes}:${formattedSeconds}`;
    return result;
  }
}