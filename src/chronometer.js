class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      return this.currentTime++
    }, 1000);
  }


  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60)
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return '0' + value;
    } else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    return
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutes1 = this.getMinutes();
    const seconds1 = this.getSeconds();
    const valueminutes = this.computeTwoDigitNumber(minutes1);
    const valueseconds = this.computeTwoDigitNumber(seconds1);
    return `${valueminutes}:${valueseconds}`;
  }
}

