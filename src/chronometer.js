class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId=setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const stringValue = "0" + value;
    return stringValue.slice(-2);
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
  }

  split() {
    // ... your code goes here
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    const finalMinutes= this.computeTwoDigitNumber(minutes);
    const finalSeconds=this.computeTwoDigitNumber(seconds);
    return `${finalMinutes}:${finalSeconds}`;
  }
}
