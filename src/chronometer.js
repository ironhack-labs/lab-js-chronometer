class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    // ... your code goes here
  }

  start(printTimeCallback) {
    let startTimer = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);

    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (this.currentTime.length == this.value.slice(0, 1)) {
      return this.currentTime.slice(0, 2);
    }
    // ... your code goes here
  }

  stop() {
    clearInterval(this.currentTime);
    // ... your code goes here
  }

  reset() {
    return (this.currentTime = 0);
    // ... your code goes here
  }

  split() {
    return `${this.getMinutes} : ${this.getSeconds}`;
    // ... your code goes here
  }
}
