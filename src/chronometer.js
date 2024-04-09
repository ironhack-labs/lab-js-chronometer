class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback(); // We call it if it exists
      }
    }, 1000); // 1000 milliseconds -> 1sec
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value > 9 ? "" + value : "0" + value;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId); // stops the startet interval at this.intervalId
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes();
    let minutesString = minutes.toString();
    let seconds = this.getSeconds();
    let secondsString = seconds.toString();

    if (secondsString.length < 2) {
      secondsString = "0" + secondsString.slice(0, 1);
    }

    if (minutesString.length < 2) {
      minutesString = "0" + minutesString.slice(0, 1);
    }

    return `${minutesString}:${secondsString}`;
  }
}
