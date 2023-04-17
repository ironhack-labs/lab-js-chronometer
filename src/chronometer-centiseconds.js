class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 6000);
    return minutes;
  }

  getSeconds() {
    // const seconds = Math.floor(this.currentTime % 6000);
    // return Math.floor(Date.now() / 6000)
    return Math.floor(this.currentTime / 100) % 60; //because you want the number between 0 and 60 (60 seconds)
  }

  getCentiseconds() {
    return this.currentTime % 100; //centi goes from 1 to 100, i just change the interval
  }

  computeTwoDigitNumber(value) {
    let num = "  ";

    if (value < 10) {
      return "0" + value.toString();
    } else {
      return value.toString(); //it converts it to a format 00 which is then needed in the split.
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return (
      this.computeTwoDigitNumber(this.getMinutes()) +
      ":" +
      this.computeTwoDigitNumber(this.getSeconds()) +
      "." +
      this.computeTwoDigitNumber(this.getCentiseconds())
    );
  }
}
