class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0; // we use time in 10 milliseconds steps
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    let minutesPassed = Math.floor(this.currentTime / 100 / 60);
    return minutesPassed;
  }

  getSeconds() {
    // ... your code goes here
    let secondsPassed = Math.floor(this.currentTime / 100 % 60);
    return secondsPassed;
  }

  getCentiseconds() {
    // ... your code goes here
    let centisecondsPassed = this.currentTime % 100;
    return centisecondsPassed;
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
    let result = 'mm:ss.SS';
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    let formattedCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    result = `${formattedMinutes}:${formattedSeconds}.${formattedCentiseconds}`;
    console.log(result)
    return result;
  }
}
