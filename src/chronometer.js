class Chronometer {
  // ... your code goes here
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60)
}

  getSeconds() {
    // ... your code goes here
    return (this.currentTime = Math.floor(this.currentTime % 60));
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) return `0${value}`;
    {
      return `${value}`;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime);
  }

  reset() {
    // ... your code goes here
    return (this.currentTime = this.currentTime = 0);
  }

  split() {
    // ... your code goes here

      const minutes = this.computeTwoDigitNumber(this.getMinutes());
      const seconds = this.computeTwoDigitNumber(this.getSeconds());
      return `${minutes}:${seconds}`
     }
}
